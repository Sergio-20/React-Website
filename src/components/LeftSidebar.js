import React, { Component } from 'react';

class LeftSidebar extends Component {
  render() {
    return (
      <section>
        <h1>Trending Artwork</h1>
        <hr/>
        <a href="https://cdn.dribbble.com/users/1945584/screenshots/6279494/__2.png"><img src="https://cdn.dribbble.com/users/1945584/screenshots/6279494/__2.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/vernacular" target="_blank"><h3 className="author">DONGJUN</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/63407/screenshots/6082327/dribbble_walk_bridge.png"><img src="https://cdn.dribbble.com/users/63407/screenshots/6082327/dribbble_walk_bridge.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/rkrishnamani" target="_blank"><h3 className="author">ranganath krishnamani</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/992274/screenshots/6298593/02_kit8-net.png"><img src="https://cdn.dribbble.com/users/992274/screenshots/6298593/02_kit8-net.png"/></a>
        <h3>By</h3> <a href="https://dribbble.com/kit8" target="_blank"><h3 className="author">Kit8</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/2847614/screenshots/6298893/design_6_2x.jpg"><img src="https://cdn.dribbble.com/users/2847614/screenshots/6298893/design_6_2x.jpg"/></a>
        <h3>By</h3><a href="https://dribbble.com/bornin1998" target="_blank"><h3 className="author">BORN IN 1998</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/3423064/screenshots/6297230/illustration_sketch1_2x.jpg"><img src="https://cdn.dribbble.com/users/3423064/screenshots/6297230/illustration_sketch1_2x.jpg"/></a>
        <h3>By</h3><a href="https://dribbble.com/Mykola_Golovko" target="_blank"><h3 className="author">Mykola</h3></a>
        <hr/>
      </section>
    );
  }
}

export default LeftSidebar;
