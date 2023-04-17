import "./products.css"
import React from "react"
import Card from "../Card/Card"

function Products() {
	return (
		<div className="Products flex-column">
			<h1>Nuestros productos</h1>

			<div className="cards__container flex-row">
				<Card name={"Pan lactal blanco"} image={"https://i.blogs.es/9b5cc5/pan-facil-y-rapido-1/840_560.jpg"} />
				<Card name={"Pan lactal integral"} image={'https://i.ytimg.com/vi/eTxEHPZUgJc/maxresdefault.jpg'}/>
				<Card name={"Pan lactal integral c/ semillas"} image={'https://cdn7.kiwilimon.com/recetaimagen/28616/960x640/28765.jpg.jpg'} />
				<Card name={"Pan lactal integral c/ semillas"} />
				<Card name={"Pan lactal integral c/ semillas"} />
				<Card name={"Pan lactal integral c/ semillas"} />
				<Card name={"Pan lactal integral c/ semillas"} />
				<Card name={"Pan lactal integral c/ semillas"} />
			</div>
		</div>
	)
}

export default Products
