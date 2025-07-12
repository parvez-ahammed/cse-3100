import React from 'react';

export default function SearchBar({ value, onChange, darkMode }) {
  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={value}
      onChange={onChange}
      style={{
        flex: 1,
        padding: '10px 15px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: `1.5px solid ${darkMode ? '#555' : '#ccc'}`,
        outline: 'none',
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#eee' : '#000',
        transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
      }}
      onFocus={e => e.target.style.borderColor = darkMode ? '#ffa500' : '#007bff'}
      onBlur={e => e.target.style.borderColor = darkMode ? '#555' : '#ccc'}
    />
  );
}
