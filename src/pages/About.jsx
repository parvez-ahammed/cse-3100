export default function About() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title">About Rick & Morty Explorer</h2>
              <p className="card-text">
                This application was developed as part of the CSE 3100 course project.
                It allows users to explore characters from the Rick and Morty universe
                with detailed information about each character.
              </p>
              <div className="mt-4">
                <h4>Favorite Quote</h4>
                <div className="card">
                  <div className="card-header">
                    Quote
                  </div>
                  <div className="card-body">
                    <figure>
                      <blockquote className="blockquote">
                        <p>"Wubba lubba dub dub!"</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        Rick Sanchez in <cite title="Rick and Morty">Rick and Morty</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}