import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (

      <div>
        <a className="btn col-md-4" href="#"><i className="fa fa-globe" aria-hidden="true"></i> Discover</a>
        <a className="btn col-md-4" href="#"><i className="fa fa-comments" aria-hidden="true"></i> My Feed</a>
        <a className="btn col-md-3" href="#"><i className="fa fa-cog fa-spin" aria-hidden="true"></i> Settings</a>
      </div>

    );
  }

}

export default Navbar;
