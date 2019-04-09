import React, { Component } from 'react';

class RightSidebar extends Component {
  render() {
    return (
      <section>
        <h1>The Latest Artwork</h1>
        <hr/>
        <a href="https://cdn.dribbble.com/users/3169496/screenshots/6300295/36-days-of-type-_2x.jpg"><img src="https://cdn.dribbble.com/users/3169496/screenshots/6300295/36-days-of-type-_2x.jpg" alt="A geometric design consisting of white, black, and shades of green."/></a>
        <h3>By</h3><a href="https://dribbble.com/vilayat" rel="noopener noreferrer" target="_blank"><h3 className="author">Vilayat Muslumzada</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/2708771/screenshots/6300144/image.png"><img src="https://cdn.dribbble.com/users/2708771/screenshots/6300144/image.png" alt="A silly design of a person with a gun."/></a>
        <h3>By</h3><a href="https://dribbble.com/Coffeescartoons" rel="noopener noreferrer" target="_blank"><h3 className="author">Pierre Coffee</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/3246223/screenshots/6299957/van_gogh_low_poly_2x.png"><img src="https://cdn.dribbble.com/users/3246223/screenshots/6299957/van_gogh_low_poly_2x.png" alt="A watercolor portrait of Vincent van Gogh."/></a>
        <h3>By</h3><a href="https://dribbble.com/LuzBellaLM" rel="noopener noreferrer" target="_blank"><h3 className="author">Luz Bella Lendinez</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/1945584/screenshots/6279369/___2x.png"><img src="https://cdn.dribbble.com/users/1945584/screenshots/6279369/___2x.png" alt="A swordsman with the vibrant colors of red and yellow accompanied by black and white."/></a>
        <h3>By</h3><a href="https://dribbble.com/vernacular" rel="noopener noreferrer" target="_blank"><h3 className="author">DONGJUN</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/947358/screenshots/6298835/neuron.png"><img src="https://cdn.dribbble.com/users/947358/screenshots/6298835/neuron.png" alt="A logo design consisting of a distorted human countenance. Shades of yellow and red along with white make up the design."/></a>
        <h3>By</h3><a href="https://dribbble.com/yuro" rel="noopener noreferrer" target="_blank"><h3 className="author">Yuri Kartashev</h3></a>
        <hr/>
      </section>
    );
  }
}

export default RightSidebar;
