import { useState } from 'react';

export default function Contact() {
  //manage the values of the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //handler for form submission
  const handleSubmit = (e) => {
    // Prevents reloading the page on form submit
    e.preventDefault(); 
    console.log({ name, email, message });
    alert('Thank you for your message! (Check the console for form data)');
    //clear the form after submission
    setName('');
    setEmail(''); 
    setMessage('');
  };        

  return ( 
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="text-center mb-4">Contact Us</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary rounded-pill px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}