import React from 'react';

//component for the text that goes over the background video
 const TextOverLay = (props) => {
	//console.log(props.show)
	//if(!props.show){
	//	return null;
	//

	let today = new Date();
	


	 return (
	 	<div className = "LOADING">
	 		<img src={require("./Garden-Overview.bmp")} alt="Zaaa GARDEN" height="100%" width="100%" />
	    	<div className="Overlay">
		 		<p> LOADING GARDEN... </p>
		 		<button id="button" onClick={props.endFunc}> Day: {today.getDate() + today.getMonth()} </button>


		 	</div>
		</div>
		)

	    
}

export default TextOverLay;