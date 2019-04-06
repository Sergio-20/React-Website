import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';

import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Footer />, document.getElementById( 'footer' ) );
ReactDOM.render( <Header />, document.getElementById( 'header' ) );
ReactDOM.render( <Main />, document.getElementById( 'main' ) );
ReactDOM.render( <Navbar />, document.getElementById( 'navbar' ) );

serviceWorker.unregister();
