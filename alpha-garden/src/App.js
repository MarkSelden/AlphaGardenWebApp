import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackVideo from './Components/BackVideo.js'
import TextOverlay from './Components/TextOverlay.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }
  

  render(){
    const endFunc = () => { this.setState({text: <TextOverlay />})};

    return (

      <div>
        <BackVideo 
          vidName={require("./Components/testSmall.mp4")}
          endFunc={endFunc}/>
        {this.state.text}
      </div>
      )
  }
}

export default App;
