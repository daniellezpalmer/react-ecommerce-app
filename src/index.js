import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './component/BaseLayout.js';
import Home from './component/Home.js'
import About from './component/About.js';
import Contact from './component/Contact.js';
import Cd from './component/ClothDiapers.js';
import Pt from './component/PottyTraining.js';
import Sd from './component/SwimDiapers.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/cloth" component={Cd} />
        <Route path="/pottytraining" component={Pt} />
        <Route path="/swim" component={Sd} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
