import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <NavBar></NavBar>
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
}
