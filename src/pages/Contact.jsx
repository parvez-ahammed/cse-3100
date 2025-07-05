import "./Contact.css"
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData]= useState({
    name:"",
     email:"", 
     massage:"",
  });

  const [success,setSuccess]= useState("");
  const [error, Seterror] =useState("");

  const handleSubmit = (e) =>{
     e.preventDefault();

      const name= e.target.name.value;
      const email=e.target.email.value;
      const message=e.target.message.value;

      if(name=="" || email==="" || message===""){
        Seterror("Please fill in all fields.");
        setSuccess("");
        return;
      }

      if(!email.includes("@")){
        Seterror("Please provide a valid email");
        setSuccess("");
        return;
      }
      setSuccess("Form submission successful.")
      Seterror("");

      e.target.reset();
  };


  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Name</label>
          <input name="name" className="form-control" type="text" />
        </div>
        <div className="form">
          <label>Email</label>
          <input name="email" className="form-control" type="email" />
        </div>
        <div className="form">
          <label>Message</label>
          <textarea name="message" className="form-control" rows="5"></textarea>
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}
