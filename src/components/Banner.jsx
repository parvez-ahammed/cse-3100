import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center text-white text-center py-24 px-5"
      style={{
        backgroundImage:
          'url("https://tldrmoviereviews.com/wp-content/uploads/2020/05/promortyus-banner.jpg")',
      }} //tailwind doesn't support dynamic URLs directly in classes, hence inline style
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Rick & Morty Explorer
      </h1>
      <p className="text-lg max-w-xl mx-auto">
        Explore characters, filter them, and learn more about the multiverse!
      </p>
    </div>
  );
};

export default Banner;
