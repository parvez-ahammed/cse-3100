import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contact-page my-5">
      <h2 className="text-center neon-heading mb-3">Contact Us</h2>
      <p className="lead text-center contact-subtext mb-5">
        We'd love to hear your feedback, questions, or interdimensional ideas!
      </p>

      <form className="contact-form p-4 rounded shadow-lg">
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light">Name</label>
          <input
            id="name"
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email</label>
          <input
            id="email"
            className="form-control form-control-lg"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label text-light">Message</label>
          <textarea
            id="message"
            className="form-control form-control-lg"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="text-center">
          <button className="btn btn-custom px-5 py-2" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
