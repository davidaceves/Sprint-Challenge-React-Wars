import React from "react";
import Character from "./Character";

function CharList (props) {
    return (
        <div>
            {props.starwarsChars.map(char => {
                return <Character char={char} />
            })}
        </div>
    );
}

export default CharList;