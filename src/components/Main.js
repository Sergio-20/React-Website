import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <hr/>
        <a href="https://cdn.dribbble.com/users/1461762/screenshots/6280906/first_man_lana_marandina_2x.png"><img src="https://cdn.dribbble.com/users/1461762/screenshots/6280906/first_man_lana_marandina_2x.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/shots/6280906-First-Man" target="_blank"><h3 className="author">Lana Marandina</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/244516/screenshots/6282415/bran.gif"><img src="https://cdn.dribbble.com/users/244516/screenshots/6282415/bran.gif"/></a>
        <h3>By</h3><a href="https://dribbble.com/eranmendel" target="_blank"><h3 className="author">Eran Mendel</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/934149/screenshots/6281755/radon_candy_dribbble_01.gif"><img src="https://cdn.dribbble.com/users/934149/screenshots/6281755/radon_candy_dribbble_01.gif"/></a>
        <h3>By</h3><a href="https://dribbble.com/karolin_gu" target="_blank"><h3 className="author">Karolin Gu</h3></a>
        <hr/>
        <a href="https://cdn.dribbble.com/users/1504495/screenshots/6296435/___1_2x.png"><img src="https://cdn.dribbble.com/users/1504495/screenshots/6296435/___1_2x.png"/></a>
        <h3>By</h3><a href="https://dribbble.com/katze1209" target="_blank"><h3 className="author">Evan_Max</h3></a>
        <hr/>
        <button className="btn btn-primary">More Artwork</button>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Main;
