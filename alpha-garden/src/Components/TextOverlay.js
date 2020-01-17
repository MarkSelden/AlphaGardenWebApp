import React from 'react';

//component for the text that goes over the background video
 const TextOverLay = (props) => {
	//console.log(props.show)
	//if(!props.show){
	//	return null;
	//

	let today = new Date();
	


	 return (
	    <div className="loadingOverlay">
		 	<p> Garden Loading... </p>
		 	<h1> Day: {today.getDate() + today.getMonth()} </h1>
		 </div>)


	    
}

export default TextOverLay;