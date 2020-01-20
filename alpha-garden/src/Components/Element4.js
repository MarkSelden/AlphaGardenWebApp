import React from 'react';
import Pre_Zoom from './Pre_Zoom'
import Post_Zoom from './Post_Zoom'
// Component for dynamic zoom data display


class Element4 extends React.Component{

	 

	constructor(props) {
		//Func to trigger the proper transformations to zoom into a square of the garden
		const zoomIn = () => {
			//mouse is in the right two quadrants
			if (this.state.x > 750){

				if (this.state.y < 500){
				this.setState({
	    			zoom: "Zoom1",
	    			overlay: <Post_Zoom className="Overlay"/>,
	    			handleClick: zoomOut
				})}else{
					this.setState({
	    			zoom: "Zoom4",
	    			overlay: <Post_Zoom className="Overlay"/>,
	    			handleClick: zoomOut
				})
				}


			}else{
				if (this.state.y < 500){
					this.setState({
		    			zoom: "Zoom2",
		    			overlay: <Post_Zoom className="Overlay"/>,
		    			handleClick: zoomOut
				})}else{
						this.setState({
		    			zoom: "Zoom3",
		    			overlay: <Post_Zoom className="Overlay"/>,
		    			handleClick: zoomOut
					})
				}
			}	
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

    _onMouseMove(e) {
    	this.setState({ x: e.screenX, y: e.screenY });
  	}	
    


	render(){


	  return (
	  		<div onMouseMove={this._onMouseMove.bind(this)}>
		  	<div id="Zoom_Container">

		    	<img src={require("./Garden-Overview.bmp")} alt="Zaaa GARDEN" height="95%" width="95%" onClick={this.state.handleClick}  id={this.state.zoom}/>

		    	
		    </div>

		    <div className="Overlay">
		    	{this.state.overlay}
		    </div>

		    </div>

	    
	  );
	}
}

export default Element4;