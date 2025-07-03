import { useState } from "react";

export default function Contact() {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Message, setMessage] = useState(null);

  const submittion = (e) => {
    e.preventDefault();

    if (Name && Email && Message) {
      console.log(Name, Email, Message)
    }
  }

  return (
    <div className="container my-4 flex flex-col gap-10">
      <h1 className="font-bold text-3xl" >Contact Us</h1>
      <form onSubmit={submittion} className="flex flex-col justify-center items-center">
        <div className="mb-3">
          <label className="font-semibold mx-2">Name</label>
          <input onChange={(e) => { setName(e.target.value) }} className=" border-black p-2 border-2 rounded-2xl " type="text" />
        </div>
        <div className="mb-3">
          <label className="font-semibold p-2 ">Email</label>
          <input onChange={(e) => { setEmail(e.target.value) }} className="form-control p-2 border-2 rounded-2xl" type="email" />
        </div>
        <div className="mb-3 flex gap-2">
          <label className="font-bold">Message</label>
          <textarea onChange={(e) => { setMessage(e.target.value) }} className="form-control rounded-2xl border-2 p-2" rows="10"></textarea>
        </div>
        <div className="flex items-center">
          <button type='submit' className="border-2 p-2 rounded-2xl bg-violet-200 hover:cursor-pointer btn btn-primary font-bold text-2xl text-blue-600">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}