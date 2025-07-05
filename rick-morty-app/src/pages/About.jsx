export default function About() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">About Rick & Morty Explorer</h1>

      <p className="text-center">
        This is a simple React app that lets you browse characters from the Rick & Morty universe.
      </p>

      <hr />
      
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 d-flex justify-content-center mb-3">
          <center>
         <img
              src="/anika.jpg"
              alt="Anupoma"
              style=
              {{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
          />
          </center>
        </div> 
        
        <div className="col-md-8">
          <h4>Developer Info</h4>
          <p>
            <strong>Anupoma Haque Anika 
              <br />
              Year : 3<sup>rd</sup>&emsp;Semester : 1<sup>st</sup>
              <br />
              Section : A<sub>1</sub>
              <br />
              ID: 20220204015 </strong>
            <br />
          </p>
        </div>
      </div>

      <hr />

      <h4 className="text-center">Favourite Quote</h4>
      <blockquote className="blockquote text-center">
        <p><b>“Sometimes science is more art than science, Morty.”</b>
        <br />  - <i>Rick Sanchez</i></p>
      </blockquote>
    </div>
  );
}
