import React, { Component } from 'react';
import Popup from './Popup.jsx';
import Tour from './Tour.jsx';


class App extends Component {
  render() {

    return [
      <div className="mainBgStyle">
        {/*Welcome to Allison Wonderland*/}
      <Tour />
      <Popup />

      </div>,
      
      <iframe
        className="bottomplayerStyle"
        key="2"
        width="100%"
        height="60"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307000506&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false&amp;visual=true"
      />

      
    ]
  }
}

export default App;
