import React from 'react';
	
	let diversity = "36%";
	let plants = ["Lavendar", "Basil", "Turnips", "Rosemary", "Cactus"];
	const plantMap = (x) => {return x + ", "}
 //component for the text that goes over the background video
 const TextOverLay = (props) => {
	//console.log(props.show)
	//if(!props.show){
	//	return null;
	//

	let today = new Date();
	 return(
 	 	<div className = "LOADING">
	 		<img src={require("./Garden-Overview.bmp")} alt="Zaaa GARDEN" height="100%" width="100%" />
	    	<div className="Overlay">
		 		<p> LOADING ALPHA GARDEN... </p>
		 		<button id="button" onClick={props.endFunc}> Day: {today.getDate() + today.getMonth()} </button>
		 		<p id="Diversity"> Diversity: {diversity} </p>
		 		<p id="Plant List"> Plants: {plants.map(plantMap)} </p>
		 	</div>
		</div>
		)    
}

export default TextOverLay;