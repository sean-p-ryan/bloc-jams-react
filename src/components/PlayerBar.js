import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
       <section id="buttons">
          <button id="previous">
            <span className="icon ion-md-skip-backward" onClick={this.props.handlePrevClick}></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>
          </button>
          <button id="next">
            <span className="icon ion-md-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">–:––</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
