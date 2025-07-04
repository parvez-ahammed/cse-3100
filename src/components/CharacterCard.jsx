import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Button
          component={Link}
          to={`/character/${character.id}`}
          variant="outlined"
          size="small"
          sx={{
            mt: 1,
            textTransform: "none", // Disables ALL CAPS
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
