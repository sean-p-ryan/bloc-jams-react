import React, { Component } from "react";
import playerBar from "../styles/player_bar.css";

class PlayerBar extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container">
      <section className="player-controls">
        <section id="player">
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span
              className={
                this.props.isPlaying ? "fas fa-pause" : "fas fa-play"
              }
            />
          </button>

          <section id="time-control">
            <input
              type="range"
              className="seek-bar"
              value={this.props.currentTime / this.props.duration || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
          </section>
          <section className="time-displays">
            <div className="current-total-time">
              {this.props.formatTime(this.props.currentTime)}/
              {this.props.formatTime(this.props.duration)}
            </div>
          </section>

          <section id="volume-control">
            <i class="fas fa-volume-up"></i>
            <input
              type="range"
              className="volume-bar"
              id="volume"
              controls
              value={this.props.currentVolume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
          </section>
        </section>
      </section>

      <section className="seek-buttons">
        <button id="previous">
          <span
            id="backwards"
            className="icon ion-md-skip-backward"
            onClick={this.props.handlePrevClick}
          />
        </button>
        <button id="next" onClick={this.props.handleNextClick}>
          <span className="icon ion-md-skip-forward" id="forward"/>
        </button>
      </section>
      </div>
      </React.Fragment>
    );
  }
}

export default PlayerBar;
