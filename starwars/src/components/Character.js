import React from "react";
import "./StarWars.css"

function Character(props) {
    return (
        <div className="Character"> 
            <h2>Name: {props.char.name}</h2>
            <p>Birth: {props.char.birth_year}</p>
            <p>Species: {props.char.species}</p>
            <p>Height: {props.char.height}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Mass: {props.char.eye_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Homeworld: {props.char.homeworld}</p>

            {/* <h3>Starships</h3>
            {props.char.starships.map(ship => {
                return <li>{ ship }</li>;
            })} */}

            <h3>Starships</h3>
            {props.char.starships.map(ship => {
                return <li>{ ship }</li>;
            })}

            <h3>Vehicles</h3>
            {props.char.vehicles.map(vehicle => {
                return <li>{ vehicle }</li>;
            })}

            
            <h3>Films:</h3>
            {props.char.films.map(film => {
                return <li>{ film }</li>;
            })}
            


        
        </div>
    ) 
    
}

export default Character;