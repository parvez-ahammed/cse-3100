
export default function About() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <h2 className="text-center mb-4">About Rick & Morty Explorer</h2>
          <p>
            Rick & Morty Explorer is a fan-made application designed for enthusiasts of the popular animated series, Rick and Morty. This app serves as a comprehensive guide to the show's vast universe, offering detailed information about its characters, locations, and episodes. Whether you're a long-time fan or new to the series, Rick & Morty Explorer provides an engaging way to explore the intricate details of Rick and Morty's adventures.
          </p>

          <h3 className="mt-5 mb-3">Developer</h3>
          <p>
            This Rick & Morty Explorer was developed by Ethan Carter, a passionate fan of Rick and Morty. With a background in software development and a deep appreciation for the show's creativity and humor, Ethan created this app to share his enthusiasm with fellow fans. The app is a testament to the vibrant community surrounding Rick and Morty and a tribute to its imaginative storytelling.
          </p>

          <h3 className="mt-5 mb-3">Favorite Quote</h3>
          <blockquote className="blockquote">
            <p>"To live is to risk it all; otherwise, you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you."</p>
          </blockquote>

          <hr className="my-5" />

          <p className="text-muted text-center small">
            This application is not affiliated with or endorsed by the creators of Rick and Morty. It is a fan-made project intended for entertainment and informational purposes only.
          </p>

        </div>
      </div>
    </div>
  );
}