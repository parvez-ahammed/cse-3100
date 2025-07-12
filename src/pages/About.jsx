export default function About() {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center [filter:blur(4px)] z-0"
        style={{
          backgroundImage: `url('https://wallpapercat.com/w/full/6/d/4/125632-3840x2160-desktop-4k-rick-and-morty-background.jpg')`,
        }}
      />
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="flex flex-col w-[90%] rounded-xl items-center my-20 py-10 bg-white/90">
          <div className="text-4xl font-bold">About This Project</div>
          <div className="mx-20 my-10">
            <p className="text-2xl">
              Rick & Morty Explorer is a dynamic web application built with
              React and styled using Tailwind CSS, designed to bring the
              eccentric universe of Rick and Morty to your fingertips. This
              interactive platform allows users to explore a vast collection of
              characters from the beloved animated series, complete with
              detailed profiles, search functionality, and filtering options.
            </p>
          </div>
          <div className="mx-20 my-10 text-3xl">Key Features:</div>
          <div className="mx-20 text-2xl">
            🔹 Character Browser: View detailed profiles of characters,
            including their species, status, origin, and more.
          </div>
          <div className="mx-20 my-5 text-2xl">
            🔹 Search Functionality: Find your favorite characters instantly
            with the intuitive search bar.
          </div>
          <div className="mx-20 text-2xl">
            🔹 Status Filtering: Narrow down results by character status—Alive,
            Dead, or Unknown.
          </div>
          <div className="mx-20 my-5 text-2xl">
            🔹 Responsive Design: A seamless experience across all devices, from
            desktops to smartphones.
          </div>
          <div className="mx-20 text-2xl">
            🔹 Aesthetic UI: Clean, modern design with blurred background
            effects for an immersive experience.
          </div>
          <div className="mx-20 my-10">
            <p className="text-2xl">
              This project was developed as part of a Software Development Lab
              assignment, demonstrating the power of React for building fast,
              interactive web applications with minimal setup. The Rick and
              Morty API was used to fetch data. The integration of Tailwind CSS
              ensures a polished, professional look without the need for
              extensive custom styling.
            </p>
          </div>
          <div className="text-4xl font-bold">Developer Information</div>
          <div className="text-2xl my-2">Name: Azad Ragib Nehal</div>
          <div className="text-2xl">ID: 20220204031</div>
          <div className="text-2xl my-2">Computer Science and Engineering</div>
          <div className="text-2xl">3rd year 1st semester</div>
          <div className="text-2xl my-2">Section: A</div>
          <div className="text-2xl">Lab Group: A2</div>
          <div className="text-2xl my-2">
            Email: azad.cse.20220204031@aust.edu
          </div>
          <div className="text-2xl">
            Github:{" "}
            <a
              href="https://github.com/MoonRise1080"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://github.com/MoonRise1080
            </a>
          </div>
          <div className="text-4xl font-bold my-10">
            Quote from Rick & Morty
          </div>
          <div className="text-2xl">
            “I’m a scientist; because I invent, transform, create, and destroy
            for a living, and when I don’t like something about the world, I
            change it.”
          </div>
          <div className="text-xl self-end mx-40">-Rick Sanchez</div>
        </div>
      </div>
    </div>
  );
}
