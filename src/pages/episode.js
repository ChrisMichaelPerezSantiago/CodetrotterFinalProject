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

          {body}
        </article>
        </div>
    )

    return (
      <div>

        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="http://bulma.io/images/bulma-logo.png"  width="112" height="28"/>
            </a>
          </div>


        <nav className="navbar">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Anime
            </a>

            <div className="navbar-dropdown">

            <Link to="/" className="navbar-item">
                <div className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item">
                      <p>
                        <strong>All Series</strong>
                        <br/>
                        <small>Catalog of all series available</small>
                      </p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <span className="icon has-text-info">
                        <i className="fa fa-film"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>



              <Link to="/my" className="navbar-item">
               <div className="level is-mobile">
                 <div className="level-left">
                   <div className="level-item">
                     <p>
                       <strong>My Series</strong>
                       <br/>
                       <small>My favorite series</small>
                     </p>
                   </div>
                 </div>
                 <div className="level-right">
                   <div className="level-item">
                     <span className="icon has-text-info">
                       <i className="fa fa-star"></i>
                     </span>
                   </div>
                 </div>
               </div>
             </Link>
            </div>
          </div>
         </nav>



        <div className="nav-left nav-menu">
         </div>

         <div className="nav-item">
         </div>



         <div className="navbar-end">
            <div className="nav-item">
              <a  href="#back" className=" button is-primary" onClick={() => history.goBack()}>
                <span className="icon">
                 <i className="fa fa-arrow-left" />
                </span>
                <span>Back</span>
             </a>
            </div>
          </div>

        </nav>

        {info}


              <div className="card" id="video-chapter-description">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-256x256">
                <img src={this.state.episode.image} alt={this.state.episode.title} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4"><strong>{this.state.episode.title}</strong></p>
              <p className="subtitle is-6">
               <span className="icon has-text-info">
              <i className="fa fa-check" aria-hidden="true"></i>
              </span>
              Sponsored by crunchyroll
              </p>
            </div>
          </div>

          <div className="content">
              {this.state.episode.description}
            <br/>
            <small><a>@crunchyroll</a> <a>#anime</a> <a>#tv serie</a></small>
          </div>
        </div>
      </div>


      <footer className="footer" id="video-footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Japanistic Anime</strong> by <a>Chris M. Perez</a>. The source code is licensed
                <a> MIT.</a>
            </p>
          <p>
            <a className="icon">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>


      </div>
    );
  }
}
