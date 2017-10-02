import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/dipes.png';

class App extends Component {
  constructor(props){
    super(props);
  };

  render() {

let app = {
  textAlign:"center",
  fontSize:40,
  margin:"20px 0px 0px 0px",
  fontFamily:"Cookie"
}

let img = {
  backgroundImage: `url(${image})`,
  height:500,
  backgroundRepeat:"no-repeat",
  display:"flex",
  margin:"2% 30% 0% 30%"
}

let body = {
  fontSize:150
}

    return (
      <div style={app} className="App">
      Welcome to
      {/* <div style={img}></div> */}
      <div style={body}>Diapers<br></br> R<br></br> Us</div>
      <Link exact to="/contact">More about us!
      </Link>
      </div>
    );
  }
}

export default App;
