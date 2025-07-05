
import BottomNavBar from "../components/BottomNavBar";
import DarkModeToggle from "../components/DarkModeToggle";
import "./carousel.css";
import { useEffect, useState } from "react";

function About() {
  useAboutTheme();
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);
  return (
    <>
      <DarkModeToggle />
      <div
        className="container my-4"
        style={{
          maxWidth: 520,
          margin: '48px auto',
          background: 'var(--about-bg, #fff)',
          borderRadius: 24,
          boxShadow: '0 4px 32px rgba(30,64,175,0.08)',
          padding: '36px 32px 32px 32px',
          textAlign: 'center',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.7s cubic-bezier(.4,2,.6,1)'
        }}
      >
        <h2 style={{
          fontWeight: 800,
          color: 'var(--about-title, #1e40af)',
          marginBottom: 18,
          letterSpacing: 1,
          fontSize: 30,
          textShadow: '0 2px 8px #e0e7ff'
        }}>About Rick & Morty Explorer</h2>
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--about-text, #444)',
          lineHeight: 1.7,
          marginBottom: 0
        }}>
          This is a simple React app that lets you browse characters from the <b>Rick & Morty</b> universe.<br/>
        </p>
      </div>
      <BottomNavBar />
    </>
  );
}
// Add dark mode CSS variables using a custom hook
function useAboutTheme() {
  useEffect(() => {
    const setAboutTheme = () => {
      if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--about-bg', '#23263a');
        document.documentElement.style.setProperty('--about-title', '#a5b4fc');
        document.documentElement.style.setProperty('--about-text', '#e5e7eb');
      } else {
        document.documentElement.style.setProperty('--about-bg', '#fff');
        document.documentElement.style.setProperty('--about-title', '#1e40af');
        document.documentElement.style.setProperty('--about-text', '#444');
      }
    };
    setAboutTheme();
    const observer = new window.MutationObserver(setAboutTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
}

export default About;