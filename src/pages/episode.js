// npm packages
import React from 'react';
import {Link} from 'react-router-dom';

// our packages
import {Crunchyroll} from '../api';





export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episode: null,
      file: null,
    };

    this.state = {
      episode: []
    }

    // trigger episode loading
    this.init(props);
  }

  componentDidUpdate() {
    const {episode, file} = this.state;

    if (!episode || !file) {
      return;
    }

    videojs('video', {
      plugins: {
        ass: {
          src: file.subtitles,
        },
      },
    });
  }

  async init(props) {
    const {location} = props;
    const file = await Crunchyroll.getEpisode(location.state);
    this.setState({
      episode: location.state,
      file,
    });
  }

  render() {
    const {episode, file} = this.state;
    const {history} = this.props;

    let body = <div> Loading...</div>;


    if (episode && file) {
      body = (
        //<video id="video" className="video-js" controls autoPlay preload="auto">
        <video id="video" className="video-js" controls  preload="auto">
          <source src={file.url} type={file.type} />
        </video>
      );
    }

    let info = (
              <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-256x256">

            <img src={this.state.episode.image} alt={this.state.episode.title} />

            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.episode.title}</strong> <small></small>
                <br/>
                {this.state.episode.description}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">

              </div>
            </nav>
          </div>
          {body}
        </article>
        </div>
    )

    return (
      <div>
        <nav className="nav">
          <div className="nav-left nav-menu">
            <div className="nav-item">
              <a href="#back" className="button is-primary" onClick={() => history.goBack()}>
                <span className="icon">
                  <i className="fa fa-arrow-left" />
                </span>
                <span>Back</span>
              </a>
            </div>
          </div>
        </nav>

        {info}


      </div>
    );
  }
}
