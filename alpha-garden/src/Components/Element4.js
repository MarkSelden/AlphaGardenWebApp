import React from 'react';
import Pre_Zoom from './Pre_Zoom'
import Post_Zoom from './Post_Zoom'
// Component for dynamic zoom data display
class Element4 extends React.Component{

	constructor(props) {

    	super(props);

    	this.state = {

    		overlay: <Pre_Zoom className="Overlay"/>,

    		zoom: "no_zoom",

    		handleClick: () => {

    			this.setState({zoom: "Zoom1",
    							overlay: <Post_Zoom className="Overlay"/>})
    		}

    	};
  	}

	render(){


	  return (

		  	<div id="Zoom_Container">

		    	<img src={require("./Garden-Overview.bmp")} alt="Zaaa GARDEN" height="95%" width="95%" onClick={this.state.handleClick}  id={this.state.zoom}/>

		    	{this.state.overlay}

		    </div>

	    
	  );
	}
}

export default Element4;