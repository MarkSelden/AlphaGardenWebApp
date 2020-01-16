import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackVideo from './Components/BackVideo.js'
import TextOverlay from './Components/TextOverlay.js'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render(){
    let displayText = false;
    let endFunc = () => {
      //displayText = true;
      
    }

    return (

      <div>
        //{displayText ? <TextOverlay /> : (<h1></h1>)}
        <BackVideo 
          vidName={require("./Components/testSmall.mp4")}
          endFunc={endFunc}/>
        <TextOverlay />
      </div>
      )
  }
}

export default App;
