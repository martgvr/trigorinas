import "./main.css"
import React from "react"
import Header from "../Header/Header"
import Button from "../Button/Button"

function Main() {
	return (
		<div className="Main">
            <Header />

			<div className="main__container flex-column">
				<div className="main__top flex-column">
					<img src="logo.png" alt="" />
					<div className="main__text flex-column">
						<h2>Panadería Artesanal</h2>
						<p>Disfrutá de lo casero sin conservantes</p>
					</div>
				</div>

				<Button text={'Conocé nuestros productos!'} />
			</div>

			<div className="shape-divider">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="shape-divider-yellow">
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
				</svg>
			</div>
			
			<div className="shape-divider">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="shape-divider-white">
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
				</svg>
			</div>
		</div>
	)
}

export default Main
