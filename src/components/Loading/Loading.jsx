import React from "react"
import "./loading.css"

function Loading({ text, txtColor }) {
	return (
		<div className="loading flex-column">
			<div className="loader"></div>
			<p style={{ color: txtColor }}>{text}</p>
		</div>
	)
}

export default Loading
