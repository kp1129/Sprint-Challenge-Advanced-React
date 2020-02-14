import React from "react";
import "./Player.css";

export const Player = ({ player }) => {
  return (
    <div className="player">
      <h3>{player.name}</h3>
      <p>{player.country}</p>
      <p>Searches: {player.searches}</p>
    </div>
  );
};
