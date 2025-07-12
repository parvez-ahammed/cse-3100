import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/character/${character.id}`)} className="cursor-pointer border p-2 rounded shadow">
      <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p>{character.status} - {character.species}</p>
    </div>
  );
}