import React from 'react';
// Component for dynamic zoom data display
class Element4 extends React.Component{

	constructor(props) {

    	super(props);

    	this.state = {
    		zoom: "no_zoom",
    		handleClick: () => {

    			this.setState({zoom: "Zoom_Container"})
    		}


    	};
  	}

	render(){


	  return (
	  	<div id={this.state.zoom}>

	    	<img src={require("./Garden-Overview.bmp")} alt="Zaaa GARDEN" height="100%" width="100%" onClick={this.state.handleClick}/>

	    </div>

	    
	  );
	}
}

export default Element4;