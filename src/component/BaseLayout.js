import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {

let whole = {
  fontFamily:"Cookie"
}

    let navs = {
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center",
      fontSize: 20,
      alignItems:"center",
      position:"fixed",
      top: 0,
      left: 0,
      height:"60px",
      width: "100%",
      // margin:"6px 0px 30px 0px",
      backgroundColor:"grey",
      color:"white",
      zIndex:1
    }

    let dru = {
      fontSize:30
    }

    let nav = {
      textDecoration: "none",
      color: "white"
    }

    let props = {
      // position:"relative",
      marginTop:70,
      marginBottom:70,
      padding:"10px 30px 10px 30px"
    }

    let footer = {
      padding: "20px 0px 20px 15px",
      display: "flex",
      justifyContent: "flex-start",
      position: "fixed",
      bottom: 0,
      left: 0,
      right:0,
      height: "20px",
      width: "100%",
      zIndex: 2,
      backgroundColor:"grey",
      color:"white"
    }

    return (
      <div style={whole} className="BaseLayout">
        <div style={navs}>
          <div style={dru}>
            <NavLink style={nav} exact to="/">Diapers R Us!
            </NavLink>
          </div><br></br>
          <NavLink style={nav} to="/home">Home
          </NavLink>
          <NavLink style={nav} to="/cloth">Cloth Diapers
          </NavLink>
          <NavLink style={nav} to="/pottytraining">Potty Training
          </NavLink>
          <NavLink style={nav} to="/swim">Swim Diapers
          </NavLink>
          <div style={dru}>
          <NavLink style={nav} to="/about">About
        </NavLink> &
          <NavLink style={nav} to="/contact">   Contact
          </NavLink>
        </div>
      </div><div style={props}>
        {this.props.children}
      </div>
        <footer style={footer}>
          Diapers R Us LLC 2017
        </footer>
      </div>
    );
  }
}
