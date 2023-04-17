import React from "react"
import "./card.css"

function Card({ name, image, price }) {
	const imageStyle = {
		background: `url(${image})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	}

	return (
		<div className="Card flex-column">
			<div className="card__image" style={imageStyle}></div>
            <div className="card__text flex-column">
			    <p>{name}</p>
			    <p>$ {price}</p>
            </div>
		</div>
	)
}

export default Card
