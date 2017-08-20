// npm packages
import _ from 'lodash';
import React from 'react';
import {Observable} from 'rxjs';
import {Link} from 'react-router-dom';
// my packages
import db from '../db';
import {Crunchyroll} from '../api';
// my components
import Episode from '../components/episode';

export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
    };

    // trigger episodes loading
    this.init(props);
  }

  async componentDidMount() {
    const series = await this.getSeries(this.props);

    this.sub = Observable.fromEvent(
      db.episodes.changes({
        since: 0,
        live: true,
        include_docs: true,
      }),
      'change'
    )
      .filter(change => !change.deleted)
      .map(change => change.doc)
      .filter(doc => doc.series === series._id)
      .scan((acc, doc) => acc.concat([doc]), [])
      .debounceTime(1000)
      .subscribe(episodes => this.setState({episodes}));
  }

  componentWillUnmount() {
    this.sub.unsubscribe();
  }

  async getSeries(props) {
    const {location} = props;
    let series = location.state;
    if (!series) {
      const {data} = await db.current.get('series');
      series = data;
    }
    return series;
  }

  async init(props) {
    const series = await this.getSeries(props);
    Crunchyroll.getEpisodes(series);
  }

  render() {
    const {episodes} = this.state;

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

             <hr className="navbar-divider"/>
                <div className="navbar-item">
                   <p className="is-size-6-desktop">
                    <strong className="has-text-info">version 1.0.0</strong>
                  </p>
                </div>

            </div>
          </div>
         </nav>



        <div className="nav-left nav-menu">
         </div>

         <div className="nav-item">
         </div>



         <div className="navbar-end">
            <div className="nav-item">
              <Link to="/" className=" button is-primary">
                <span className="icon">
                 <i className="fa fa-arrow-left" />
                </span>
                <span>Back</span>
             </Link>
            </div>
          </div>

        </nav>

        {_.chunk(episodes, 4).map((chunk, i) => (
          <div key={`chunk_${i}`} className="columns" id="columns-series">
            {chunk.map(ep => <Episode key={ep._id} episode={ep} />)}
          </div>
        ))}

        <footer className="footer">
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
