import "./products.css"
import React, { useEffect } from 'react'
import ProductsCard from "../ProductsCard/ProductsCard"

import AOS from 'aos'
import 'aos/dist/aos.css'

function Products() {
	useEffect(() => {
		AOS.init();
	}, [])
	  
	return (
		<div className="Products flex-column" id="products" data-aos="fade-right">
			<h1>Nuestros productos</h1>

			<div className="cards__container flex-row">
				<ProductsCard name={"Pan lactal blanco"} price={'550'} image={"https://i.blogs.es/9b5cc5/pan-facil-y-rapido-1/840_560.jpg"} />
				<ProductsCard name={"Pan lactal integral"} price={'600'} image={'https://i.ytimg.com/vi/eTxEHPZUgJc/maxresdefault.jpg'} />
				<ProductsCard name={"Pan lactal integral c/ semillas"} price={'700'} image={'https://cdn7.kiwilimon.com/recetaimagen/28616/960x640/28765.jpg.jpg'} />
				<ProductsCard name={"Pancitos saborizados de salame (x12)"} price={'800'} image={'https://img-global.cpcdn.com/recipes/30bb7cbaf3aaa30e/680x482cq70/pan-saborizado-con-salame-foto-principal.jpg'} />
				<ProductsCard name={"Pancitos saborizados de jamón (x12)"} price={'800'} image={'https://1.bp.blogspot.com/-1IY34NUQUNY/XYPzuTB_tnI/AAAAAAAAEK0/pJ8JwVDfu3oDEM1duM7uGDdNik6D4n5yQCLcBGAsYHQ/s1600-c/2.jpg'} />
				<ProductsCard name={"Pancitos saborizados de queso (x12)"} price={'750'} image={'https://elcordillerano1.cdn.net.ar/252/elcordillerano/images/01/50/39/1503962_52412b3304497dfb69386c72ec9a245cc5adc9d79ed1c94b61694807c491f877/lg.webp'} />
				<ProductsCard name={"Pancitos saborizados de cebolla (x12)"} price={'500'} image={'https://img-global.cpcdn.com/recipes/a2bbf879e1e7204e/680x482cq70/pan-saborizado-con-cebolla-foto-principal.jpg'} />
				<ProductsCard name={"Pancitos saborizados de oregano (x12)"} price={'500'} image={'https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-pancitos-pan-pancitos-saborizados-pancitos-saborizado-hierbas.jpg'} />
			</div>
		</div>
	)
}

export default Products
