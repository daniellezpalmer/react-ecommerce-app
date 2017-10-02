import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  constructor(props){
    super(props);
  };
  render() {

let style = {
  fontFamily:"Amatic SC",
  fontSize:70,
  textAlign:"center"
}

    return (
      <div style={style} className="Contact">
        For questions or concerns pleaes contact us at:<br></br>
        PHONE: (512) 555 5555<br></br>
        EMAIL: babiesrus@example.com<br></br>
        ADDRESS: 1234 Example Ln Austin, TX 78704<br></br>
      </div>
    );
  }
}
