export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          
          <p className="hero-subtitle">Got questions? We've got answers!</p>
        </div>
      </div>
      
      {/* Portal Animation Container */}
      <div className="portal-animation">
        <div className="portal-ring outer"></div>
        <div className="portal-ring middle"></div>
        <div className="portal-ring inner"></div>
      </div>
      
      {/* Glassmorphism Form */}
      <div className="contact-form-container">
        <div className="form-glass">
          <form className="contact-form">
            <h2 className="form-title">Send a Message</h2>
            
            <div className="form-group">
              <label className="form-label">Name</label>
              <input 
                className="form-input" 
                type="text" 
                placeholder="Morty Smith" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                className="form-input" 
                type="email" 
                placeholder="morty@citadel.com" 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                className="form-textarea" 
                rows="5"
                placeholder="Wubba lubba dub dub!"
              ></textarea>
            </div>
            
            <button className="submit-btn" type="submit">
              Transmit Message
              <span className="portal-effect"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}