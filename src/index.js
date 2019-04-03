import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Main />, document.getElementById( 'main' ) );
ReactDOM.render( <Navbar />, document.getElementById( 'navbar' ) );
ReactDOM.render( <Footer />, document.getElementById( 'footer' ) );

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

 ReactDOM.render(
     <Router history={hashHistory}>
       <App />
     </Router>,
   document.getElementById('root') as HTMLElement
 );

serviceWorker.unregister();
