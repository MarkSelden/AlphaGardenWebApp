import React from 'react';
import Pre_Zoom from './Pre_Zoom'
import Post_Zoom from './Post_Zoom'
// Component for dynamic zoom data display


class Element4 extends React.Component{

	 

	constructor(props) {
		//Func to trigger the proper transformations to zoom into a square of the garden
		const zoomIn = () => {
			//mouse is in the right two quadrants
			let square = 11;
			removeOverlay();
			triggerZoom(square);
			setOverlay(square);	
		}

		const removeOverlay = () => {
			this.setState({
				overlay: null
			})
		}

		const triggerZoom = (rowCol) => {
			this.setState({
				zoom: "Zoom" + rowCol,
				handleClick: zoomOut
			})

		}

		const setOverlay = (rowCol) => {
            setTimeout(

            	() => {this.setState({
            		overlay: <Post_Zoom box={rowCol}/>
            	})}
            , 3000);
        }
		


		//Func to dynamically zoom back out to the overhead of the garden
		const zoomOut = () => {
			this.setState({
				zoom: "ZoomOut",
				overlay: <Pre_Zoom className="Overlay"/>,
				handleClick: zoomIn
		})}

    	super(props);

    	this.state = {

    		overlay: <Pre_Zoom className="Overlay"/>,

    		zoom: "no_zoom",

    		handleClick: zoomIn,

    		x:0,

    		y:0

    	}
    }








    //constantly updates the position of
    _onMouseMove(e) {
    	this.setState({ x: (document.getElementById('Zoom_Container').offsetRight), y: e.clientY });
  	}	
    


	render(){


	  return (
	  		<div onMouseMove={this._onMouseMove.bind(this)}>
		  	<div id="Zoom_Container">

		    	<img src={require("./Garden-Grid.bmp")} alt="Zaaa GARDEN" height="100%" width="100%" onClick={this.state.handleClick}  id={this.state.zoom}/>

		    	
		    </div>

		    <div className="Overlay">
		    	{this.state.overlay}
		    </div>

		    </div>

	    
	  );
	}
}

export default Element4;