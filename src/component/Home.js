import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dipes from '../images/bebe.jpg'

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {

let img = {
  backgroundImage:`url(${dipes})`,
  backgroundRepeat:"no-repeat",
  height:1600,
  width:"100%",
  textAlign:"center",
  fontSize:45
}

    return (
      <div style={img} className="Home">
        Your one stop shop for all your diapering needs!<br></br>
      </div>
    );
  }
}
