
import BottomNavBar from "../components/BottomNavBar";
import DarkModeToggle from "../components/DarkModeToggle";
import "./carousel.css";
import { useEffect, useState } from "react";

export default function Contact() {
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
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 4px 32px rgba(30,64,175,0.08)',
          padding: '36px 32px 32px 32px',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.7s cubic-bezier(.4,2,.6,1)'
        }}
      >
        <h2 style={{fontWeight: 800, color: '#1e40af', marginBottom: 18, letterSpacing: 1, textAlign: 'center', fontSize: 30, textShadow: '0 2px 8px #e0e7ff'}}>Contact Us</h2>
        <form style={{display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center'}}>
          <div style={{textAlign: 'left', width: '100%', maxWidth: 340, animation: show ? 'fadeIn 0.7s' : 'none'}}>
            <label style={{fontWeight: 600, color: '#374151'}}>Name</label>
            <input className="form-control" type="text" style={{borderRadius: 12, marginTop: 4, fontSize: 16, padding: 10, boxShadow: '0 1px 4px #e0e7ff', width: '100%'}} />
          </div>
          <div style={{textAlign: 'left', width: '100%', maxWidth: 340, animation: show ? 'fadeIn 0.9s' : 'none'}}>
            <label style={{fontWeight: 600, color: '#374151'}}>Email</label>
            <input className="form-control" type="email" style={{borderRadius: 12, marginTop: 4, fontSize: 16, padding: 10, boxShadow: '0 1px 4px #e0e7ff', width: '100%'}} />
          </div>
          <div style={{textAlign: 'left', width: '100%', maxWidth: 340, animation: show ? 'fadeIn 1.1s' : 'none'}}>
            <label style={{fontWeight: 600, color: '#374151'}}>Message</label>
            <textarea className="form-control" rows="5" style={{borderRadius: 12, marginTop: 4, fontSize: 16, padding: 10, boxShadow: '0 1px 4px #e0e7ff', width: '100%'}}></textarea>
          </div>
          <button className="carousel-next-btn" type="submit" style={{margin: '0 auto', width: 120, height: 44, borderRadius: 22, fontWeight: 700, fontSize: 18, color: '#fff', background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', boxShadow: '0 2px 12px rgba(99,102,241,0.13)', letterSpacing: 1}}>Send</button>
        </form>
      </div>
      <BottomNavBar />
    </>
  );
}