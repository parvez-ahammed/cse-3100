export default function About() {
  return (

    <div className="container my-4 flex flex-col justify-center items-center gap-5">
      <h2 className=" text-4xl font-semibold " >About Rick & Morty Explorer</h2>
      <p className="text-2xl border-2 p-3 rounded-2xl">
        This is a simple and interactive React application that allows users to explore characters from the Rick & Morty universe. It showcases core front-end development concepts such as routing, pagination, state management, and API integration.
        <h2 className=" text-4xl font-semibold text-center " >Purpose of app</h2>
        This project was developed as part of the coursework for CSE-3100, with the goal of helping students understand practical React development by building something fun and engaging.
      </p>
    </div>
  );
}
