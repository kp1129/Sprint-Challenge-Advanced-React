import React from 'react';
import './Players.css';

export const Player = ({player}) => {
    return (
        <div className="player">
           <h3>{player.name}</h3>
           <p>{player.country}</p>
           <p>Searches: {player.searches}</p>
         </div>
    )
}