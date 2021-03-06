import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";
import album from "./../styles/album.css";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hover: false,
      currentTime: 0,
      displayTime: "0:00",
      duration: album.songs[0].duration,
      displayDuration: null,
      currentVolume: 0.5
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        const currentTime = this.audioElement.currentTime;
        this.setState({ currentTime: currentTime });
        this.formatTime(currentTime);
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ currentVolume: this.audioElement.volume });
      }
    };
    this.audioElement.addEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.removeEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && this.state.currentSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    if (newIndex > this.state.album.songs.length - 1) {
      this.setSong(this.state.album.songs[0]);
      this.play();
      return;
    }
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
    var displayTime = this.formatTime(newTime);
    this.setState({ displayTime: this.displayTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.setState({ currentVolume: newVolume });
    this.audioElement.volume = newVolume;
  }

  handleMouseEnter(song) {
    this.setState({ hover: song });
  }

  handleMouseOut(song) {
    this.setState({ hover: false });
  }

  createSpan(song, index) {
    if (this.state.isPlaying === true && this.state.currentSong === song) {
      return <span className="icon ion-md-pause" />;
    } else if (this.state.hover === song) {
      return <span className="icon ion-md-play" />;
    } else return <span>{index + 1}</span>;
  }

  formatTime(time) {
    if (time === NaN) {
      this.setState({ displayTime: "-:--" });
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time) - 60 * minutes;
    if (seconds < 10) {
      var newTime = minutes + ":" + 0 + seconds;
    } else {
      var newTime = minutes + ":" + seconds;
    }
    const newTimeString = newTime.toString();
    return newTimeString;
  }

  render() {
    return (
      <React.Fragment>
      // <div className="header">
      // </div>
      <section className="album">
        <section id="album-info">
          <h1 id="album-title">
            {this.state.album.title}
            <br />
            by {this.state.album.artist}
          </h1>
        </section>

        <div className="album-main">
          <img
            id="album-cover-art"
            src={this.state.album.albumCover}
            alt={this.state.album.title}
          />

          <table id="song-list">
            <thead>
              <tr>
                <td>#</td>
                <td>TITLE</td>
                <td>LENGTH</td>
              </tr>
            </thead>
            <colgroup>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column" />
            </colgroup>
            <tbody>
              {this.state.album.songs.map((song, index) => (
                <tr
                  className="song"
                  key={song}
                  onClick={() => this.handleSongClick(song)}
                  onMouseEnter={() => this.handleMouseEnter(song)}
                  onMouseLeave={() => this.handleMouseOut(song)}
                >
                  <td>{this.createSpan(song, index)}</td>
                  <td>{song.title}</td>
                  <td>{this.formatTime(song.duration)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <PlayerBar
        isPlaying={this.state.isPlaying}
        currentSong={this.state.currentSong}
        currentTime={this.audioElement.currentTime}
        duration={this.audioElement.duration}
        currentVolume={this.state.currentVolume}
        displayTime={this.state.displayTime}
        displayDuration={this.state.displayDuration}
        handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        handlePrevClick={() => this.handlePrevClick()}
        handleNextClick={() => this.handleNextClick()}
        handleTimeChange={e => this.handleTimeChange(e)}
        handleVolumeChange={e => this.handleVolumeChange(e)}
        formatTime={t => this.formatTime(t)}
      />
      </React.Fragment>
    );
  }
}
export default Album;
