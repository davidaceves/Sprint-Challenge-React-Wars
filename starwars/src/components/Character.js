import React from "react";
import "./StarWars.css"

function Character(props) {
    return (
        <div className="Character"> 
            <h2>Name: {props.char.name}</h2>
            <p><span>Birth:</span> {props.char.birth_year}</p>
            <p><span>Species:</span> {props.char.species}</p>
            <p><span>Height:</span> {props.char.height}</p>
            <p><span>Gender:</span> {props.char.gender}</p>
            <p><span>Mass:</span> {props.char.eye_color}</p>
            <p><span>Hair Color:</span> {props.char.hair_color}</p>
            <p><span>Homeworld:</span> {props.char.homeworld}</p>

            <h3>Starships:</h3>
            <div className="list-container">
                {props.char.starships.map(ship => {
                    return <li>{ ship }</li>;
                })}
            </div>

            <h3>Vehicles:</h3>
            <div className="list-container"> 
                {props.char.vehicles.map(vehicle => {
                    return <li>{ vehicle }</li>;
                })}
            </div>

            <h3>Films:</h3>
            <div className="list-container"> 
                {props.char.films.map(film => {
                    return <li>{ film }</li>;
                })}
            </div>

            <h3>Created:</h3>
            <p>{props.char.created}</p>

            <h3>Edited:</h3>
            <p>{props.char.edited}</p>
            


        
        </div>
    ) 
    
}

export default Character;