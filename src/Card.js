import React from "react";
import "./Card.css";

function Card(props) {
    const { image, head, description, link } = props;
    return (
        <div className="mid">
            <div className="block">
                <img src={image} alt="Image" />
                <p>Category</p>
                <h3>
                    {head}
                </h3>
                <p>{description}</p>
                <a href={link}>
                    Read Full Story
                </a>
            </div>
        </div>
    );
}

export default Card;
