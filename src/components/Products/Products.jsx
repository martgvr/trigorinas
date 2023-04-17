import "./products.css"
import React, { useEffect, useState } from 'react'
import { getData } from "../../services/firebase.service"

import AOS from 'aos'
import 'aos/dist/aos.css'

import Loading from "../Loading/Loading"
import ProductsCard from "../ProductsCard/ProductsCard"

function Products() {
	const [data, setData] = useState(null)

	useEffect(() => {
		AOS.init()
		getData("products").then((res) => setData(res))
	}, [])
	  
	return (
		<div className="Products flex-column" id="products" data-aos="fade-right">
			<h1>Nuestros productos</h1>
			<div className="cards__container flex-row">
				{ 
				data === null ? 
					<Loading text={'Cargando productos'} />  
					: 
					data.map(item => <ProductsCard name={item.name} price={item.price} image={item.image} />) 
				}
			</div>
		</div>
	)
}

export default Products
