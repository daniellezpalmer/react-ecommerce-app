import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  constructor(props){
    super(props);
  };
  render() {

let style = {
  fontFamily:"Amatic SC",
  textAlign:"center",
  fontSize:30
}

    return (
      <div style={style} className="About">

        <p>ABOUT US:<br></br>
Farm-to-table church-key kickstarter tattooed salvia master cleanse scenester lyft palo santo bitters crucifix cred. Messenger bag selfies bespoke deep v flexitarian, single-origin coffee direct trade small batch neutra. Literally adaptogen affogato irony banjo craft beer enamel pin viral mlkshk live-edge. Dreamcatcher kombucha activated charcoal salvia af chartreuse. Literally heirloom keytar live-edge beard woke taxidermy tousled sartorial biodiesel. Narwhal knausgaard af, meditation portland everyday carry yr shaman. Post-ironic vegan everyday carry af pickled meggings. Flexitarian pinterest kogi selvage sriracha. Pug lo-fi schlitz quinoa drinking vinegar pop-up. Lyft bicycle rights deep v woke mumblecore unicorn semiotics flannel +1 drinking vinegar. Four loko echo park affogato fashion axe, poutine selfies cornhole organic green juice. Lumbersexual vegan keffiyeh hell of XOXO deep v crucifix literally fam craft beer williamsburg pork belly. Street art etsy literally, affogato forage listicle synth godard mumblecore cliche copper mug.
<br></br></p>
<p>
OUR MISSION:<br></br>
Stumptown pork belly vaporware poke hexagon coloring book. Edison bulb kitsch shoreditch prism mixtape. Swag chartreuse godard edison bulb cold-pressed. Subway tile pour-over cornhole next level portland try-hard. Direct trade hexagon affogato art party, fingerstache biodiesel yr activated charcoal fixie. Raw denim try-hard pour-over, semiotics craft beer cray sustainable mustache shaman affogato freegan art party banjo bespoke microdosing. Meggings church-key woke authentic food truck iceland farm-to-table roof party chia. Vice celiac XOXO, trust fund woke selvage everyday carry cold-pressed hella banh mi unicorn gluten-free thundercats. Helvetica green juice offal, unicorn hella subway tile vexillologist drinking vinegar selvage leggings succulents flannel chillwave cronut celiac. Disrupt hexagon slow-carb tacos, authentic letterpress kitsch mumblecore air plant ethical vaporware skateboard lumbersexual. Cloud bread heirloom adaptogen, hell of schlitz hoodie iPhone lyft copper mug snackwave readymade kickstarter. Pok pok ethical artisan wayfarers scenester, lo-fi twee man bun typewriter. Sartorial tbh pok pok copper mug, pop-up put a bird on it schlitz. Tattooed polaroid single-origin coffee affogato. Typewriter salvia ethical beard locavore bushwick, VHS yuccie everyday carry hella roof party tilde mustache kombucha quinoa.</p>
      </div>
    );
  }
}
