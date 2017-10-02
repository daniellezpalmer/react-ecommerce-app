import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img111 from '../images/sailorsd.jpg';
import img222 from '../images/pinksd.jpg';
import img333 from '../images/flowersd.jpg';

export default class Sd extends Component {
  constructor(props){
    super(props);
  }
  render() {

let title = {
  textAlign:"center",
  fontSize:60
}

let cd = {
  display:"flex",
  textAlign:"center"
}

let divs = {
  textAlign:"center",
  fontSize:40
}

let img11 = {
backgroundImage:`url(${img111})`,
height:465,
width:465,
backgroundRepeat:"no-repeat"
}

let img22 = {
backgroundImage:`url(${img222})`,
height:465,
width:465,
backgroundRepeat:"no-repeat"
}

let img33 = {
backgroundImage:`url(${img333})`,
height:465,
width:465,
backgroundRepeat:"no-repeat"
}

    return (
      <div className="Cd">
        <div style={title}>
            All Things Swim!<br></br>
            <Link to="/home"><button>Home</button></Link>
            
<div style={cd}>
  <div style={divs}>
  <div style={img11}>
  </div>
  Swim Diaper<br></br>
  Color: Sailor<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
<div style={divs}>
  <div style={img22}>
  </div>
  Swim Diaper<br></br>
  Color: Pink<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
<div style={divs}>
  <div style={img33}>
  </div>
  Swim Diaper<br></br>
  Color: Flowers<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
</div>
      </div>
    </div>
    );
  }
}
