import React from 'react';
import ReactDOM from 'react-dom';
import './styles/footer.css';
import './styles/header.css';
import './index.css';
import './styles/main.css';
import './styles/navbar.css';
import './styles/sidebar.css';

import Footer from './components/Footer';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Main from './components/Main';
import Navbar from './components/Navbar';
import RightSidebar from './components/RightSidebar';

import * as serviceWorker from './components/serviceWorker';

ReactDOM.render( <Navbar />, document.getElementById( 'navbar' ) );
ReactDOM.render( <Header />, document.getElementById( 'header' ) );
ReactDOM.render( <Main />, document.getElementById( 'main' ) );
ReactDOM.render( <Footer />, document.getElementById( 'footer' ) );
ReactDOM.render( <LeftSidebar />, document.getElementById( 'left-sidebar' ) );
ReactDOM.render( <RightSidebar />, document.getElementById( 'right-sidebar' ) );

serviceWorker.unregister();
