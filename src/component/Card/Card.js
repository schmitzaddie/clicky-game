import React from "react";
import "./Card.css";

function MyCard(props) {
    return (
        <div className="cards" onClick={() => props.count(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        </div>
    )
}

export default MyCard;