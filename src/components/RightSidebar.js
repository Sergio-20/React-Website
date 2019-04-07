import React, { Component } from 'react';

class RightSidebar extends Component {
  render() {
    return (
      <section>
        <h1>The Latest Artwork</h1>
        <hr/>
        <a href="https://cdn.dribbble.com/users/3169496/screenshots/6300295/36-days-of-type-_2x.jpg"><img src="https://cdn.dribbble.com/users/3169496/screenshots/6300295/36-days-of-type-_2x.jpg"/></a>
        <h3>By</h3><a href="https://dribbble.com/vilayat" target="_blank"><h3 className="author">Vilayat Muslumzada</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/2708771/screenshots/6300144/image.png"><img src="https://cdn.dribbble.com/users/2708771/screenshots/6300144/image.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/Coffeescartoons" target="_blank"><h3 className="author">Pierre Coffee</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/3246223/screenshots/6299957/van_gogh_low_poly_2x.png"><img src="https://cdn.dribbble.com/users/3246223/screenshots/6299957/van_gogh_low_poly_2x.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/LuzBellaLM" target="_blank"><h3 className="author">Luz Bella Lendinez</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/1945584/screenshots/6279369/___2x.png"><img src="https://cdn.dribbble.com/users/1945584/screenshots/6279369/___2x.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/vernacular" target="_blank"><h3 className="author">DONGJUN</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/947358/screenshots/6298835/neuron.png"><img src="https://cdn.dribbble.com/users/947358/screenshots/6298835/neuron.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/yuro" target="_blank"><h3 className="author">Yuri Kartashev</h3></a>
        <hr/>
      </section>
    );
  }
}

export default RightSidebar;
