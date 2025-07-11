export default function Join() {
  return (
    <main className="container py-5">
      <h1>Join Us</h1>
      <p>Welcome! Join our community by signing up here.</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Join Now
        </button>
      </form>
    </main>
  );
}
