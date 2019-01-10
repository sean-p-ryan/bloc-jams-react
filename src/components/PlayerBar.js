import React, { Component } from "react";
import playerBar from "../styles/player_bar.css";

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-controls">
        <section id="player">
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span
              className={
                this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play"
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
            <div className="current-time">
              {this.props.formatTime(this.props.currentTime)}/
              {this.props.formatTime(this.props.duration)}
            </div>
          </section>

          <section id="volume-control">
            <i className="icon ion-md-volume" />

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

        <section className="seek-buttons">
          <button id="previous">
            <span
              className="icon ion-md-skip-backward"
              onClick={this.props.handlePrevClick}
            />
          </button>

          <button id="next" onClick={this.props.handleNextClick}>
            <span className="icon ion-md-skip-forward" />
          </button>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
