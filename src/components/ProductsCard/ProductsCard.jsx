import './productscard.css'
import React from 'react'

function ProductsCard({ name, image, price }) {

	const imageStyle = {
		background: `url(${image})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	}

	return (
		<div className="ProductsCard flex-column">
			<div className="card__image" style={imageStyle}></div>
            <div className="card__text flex-column">
			    <p>{name}</p>
			    <p>$ {price}</p>
            </div>
		</div>
	)
}

export default ProductsCard