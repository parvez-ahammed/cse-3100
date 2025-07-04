import React from 'react';
import { Code, Heart, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Rick & Morty Explorer</h1>
          <p className="text-lg text-gray-600">
            Discover the infinite multiverse of Rick and Morty characters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="mr-2 text-yellow-500" size={24} />
              About the App
            </h2>
            <p className="text-gray-600 mb-4">
              This character explorer allows you to dive deep into the Rick and Morty universe. 
              Search through hundreds of characters, filter by their status, and explore detailed 
              information about each character including their origin, location, and episode appearances.
            </p>
            <p className="text-gray-600">
              Built with modern web technologies including React, TypeScript, and Tailwind CSS, 
              this app provides a smooth and responsive experience across all devices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Code className="mr-2 text-blue-500" size={24} />
              Developer
            </h2>
            <p className="text-gray-600 mb-4">
              This application was crafted with passion by a developer who loves both 
              clean code and interdimensional adventures. The app showcases modern 
              React development practices and responsive design principles.
            </p>
            <p className="text-gray-600">
              Special thanks to the Rick and Morty API for providing the comprehensive 
              character data that makes this exploration possible.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Heart className="mr-2 text-red-500" size={24} />
            Favorite Quote
          </h2>
          <blockquote className="text-lg text-gray-700 italic text-center">
            "Wubba lubba dub dub! In bird culture, that means 'I am in great pain, please help me.'"
          </blockquote>
          <p className="text-center text-gray-600 mt-2">- Rick Sanchez</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Data provided by the{' '}
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Rick and Morty API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;