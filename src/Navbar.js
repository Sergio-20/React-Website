import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (

      <div>
        <a class="btn col-md-4" href="#"><i class="fa fa-globe" aria-hidden="true"></i> Discover</a>
        <a class="btn col-md-4" href="#"><i class="fa fa-comments" aria-hidden="true"></i> My Feed</a>
        <a class="btn col-md-3" href="#"><i class="fa fa-cog fa-spin" aria-hidden="true"></i> Settings</a>
      </div>

    );
  }

}

export default Navbar;
