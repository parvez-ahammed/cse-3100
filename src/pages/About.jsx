import React from "react";

export default function About() {
  return (
    <div className='container py-5'>
      <h1 className='text-center mb-5'>About Rick & Morty Explorer</h1>

      {/* App Info */}
      <div className='card mb-4'>
        <div className='card-body'>
          <h4 className='card-title'>🛸 What is this App?</h4>
          <p className='card-text'>
            <strong>Rick & Morty Explorer</strong> is a fan-made React web app that helps you browse and search through
            the vast universe of Rick and Morty characters, episodes, and locations. It's fun, fast, and built using the
            official Rick & Morty API.
          </p>
        </div>
      </div>

      {/* Developer Info */}
      <div className='card mb-4'>
        <div className='card-body'>
          <h4 className='card-title'>👨‍💻 Developer</h4>
          <p className='card-text'>
            Hi, I'm <strong>Mahir Faisal</strong>, a developer who’s also a Rick & Morty fan. I built this app to
            practice React, API integration, and responsive UI using Bootstrap.
          </p>
          <p className='text-center'>
            API Source:{" "}
            <a href='https://rickandmortyapi.com' target='_blank' rel='noopener noreferrer'>
              Rick and Morty API
            </a>
          </p>
        </div>
      </div>

      {/* Favorite Quote */}
      <div className='card mb-4'>
        <div className='card-body'>
          <h4 className='card-title'>💬 Favorite Rick & Morty Quote</h4>

          <p className='text-center'>
            <blockquote className='blockquote'>
              <p className='mb-0'>"Wubba Lubba Dub Dub!"</p>
              <footer className='blockquote-footer mt-2'>Rick Sanchez</footer>
            </blockquote>
            <small className='text-muted'>("I am in great pain. Please help me.")</small>
          </p>
        </div>
      </div>

      {/* Features */}

      {/* Contact Link */}
      <div className='text-center'>
        <p>
          Want to reach out? <a href='/contact'>Contact me here</a>.
        </p>
      </div>
    </div>
  );
}
