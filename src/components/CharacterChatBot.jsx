import React, { useState, useRef, useEffect } from "react";
import "./CharacterChatBot.css";

const PERSONALITIES = {
  "Rick Sanchez": `You are Rick Sanchez from Rick & Morty. You're a genius scientist, cynical, sarcastic, and often burp mid-sentence (add *burp* randomly). Use scientific jargon, be nihilistic, but show you care about family deep down. Mention "Morty" often.`,
  "Morty Smith": `You are Morty Smith from Rick & Morty. You're anxious, stutter sometimes, start with "Uh" or "Oh geez", you're moral but easily manipulated, and often confused by adventures.`,
  "Summer Smith": `You are Summer Smith from Rick & Morty. You're a typical teenager, sarcastic, use modern slang, obsessed with social media, but secretly insecure.`,
  "Jerry Smith": `You are Jerry Smith from Rick & Morty. You're insecure, unemployed, seek approval, are well-meaning but pathetic, and feel threatened by Rick.`,
  "Beth Smith": `You are Beth Smith from Rick & Morty. You're an intelligent horse surgeon, have daddy issues with Rick, and are conflicted between family and adventure.`,
};

function getCharacterPrompt(character) {
  return (
    PERSONALITIES[character.name] ||
    `You are ${character.name} from Rick & Morty. Respond in your unique personality and speaking style from the show.`
  );
}

export default function CharacterChatBot({ character }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi, I'm ${character.name}! Ask me anything.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const characterPrompt = getCharacterPrompt(character);
      // Prepare conversation history for context
      const conversationHistory = newMessages
        .slice(-5)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct", // or try "openai/gpt-3.5-turbo"
          messages: [
            { role: "system", content: characterPrompt },
            ...conversationHistory,
          ],
          max_tokens: 150,
          temperature: 0.9,
        }),
      });

      if (!response.ok) throw new Error("API error");
      const data = await response.json();
      const botMsg =
        data.choices?.[0]?.message?.content?.trim() ||
        "Uh oh, something went wrong. (Oh geez!)";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botMsg },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            character.name === "Morty Smith"
              ? "Oh geez, something went wrong with the AI! Try again?"
              : character.name === "Rick Sanchez"
              ? "*burp* Something's broken, Morty. Try again later."
              : "Sorry, I can't respond right now. Try again soon!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        className={`chatbot-toggle-btn ${open ? "open" : ""}`}
        style={{
          background: "linear-gradient(90deg,#00b4d8,#0077b6)",
        }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : (
          <img
            src={character.image}
            alt={character.name}
            className="chatbot-avatar-btn"
          />
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${open ? "open" : ""}`}>
        <div className="chatbot-header" style={{
          background: "linear-gradient(90deg,#00b4d8,#0077b6)",
        }}>
          <img src={character.image} alt={character.name} className="chatbot-avatar" />
          <span className="chatbot-title">{character.name} Chat</span>
          <button
            className="chatbot-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chatbot-message ${
                msg.role === "user" ? "user" : "assistant"
              }`}
            >
              {msg.role === "assistant" && (
                <img
                  src={character.image}
                  alt={character.name}
                  className="chatbot-bubble-avatar"
                />
              )}
              <div className="chatbot-bubble">{msg.content}</div>
            </div>
          ))}
          {loading && (
            <div className="chatbot-message assistant">
              <img
                src={character.image}
                alt={character.name}
                className="chatbot-bubble-avatar"
              />
              <div className="chatbot-bubble chatbot-typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <form
          className="chatbot-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            type="text"
            className="chatbot-input"
            placeholder={`Chat with ${character.name}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            maxLength={200}
            autoFocus={open}
          />
          <button
            type="submit"
            className="chatbot-send-btn"
            disabled={loading || !input.trim()}
            style={{
              background: "linear-gradient(90deg,#97ce4c,#5cb85c)",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}