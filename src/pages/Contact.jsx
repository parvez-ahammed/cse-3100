
import {useState} from "react";
import './Contact.css';


export default function Contact() {
  const [form,setform]=useState({name:"",email:"",message: ""});

  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
  };

  const handlesubmit=(e)=>{
    e.preventDefault();
    alert("Thanks for your message!");
    setform({name:"",email:"",message:""});
  };

  return (
    <div className="container" style={{maxWidth:"600px",marginTop:"3rem"}}>
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handlesubmit}>
  <div>
    <label>Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      value={form.name}
      onChange={handlechange}
      required
    />
  </div>
  <div>
    <label>Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      value={form.email}
      onChange={handlechange}
      required
    />
  </div>
  <div>
    <label>Message</label>
    <textarea
      name="message"
      rows="4"
      placeholder="Your message..."
      value={form.message}
      onChange={handlechange}
      required
    />
  </div>
  <div style={{textAlign: 'center'}}>
    <button type="submit">Submit</button>
  </div>
</form>

    </div>
  );
}
