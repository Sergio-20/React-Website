import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Main />, document.getElementById( 'main' ) );
ReactDOM.render( <Navbar />, document.getElementById( 'navbar' ) );
ReactDOM.render( <Footer />, document.getElementById( 'footer' ) );

serviceWorker.unregister();
