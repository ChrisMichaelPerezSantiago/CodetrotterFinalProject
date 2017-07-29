// npm packages
import React from 'react';
import {Link} from 'react-router-dom';

// our packages
import {Crunchyroll} from '../api';

export default class Settings extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const {series} = this.state;

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
                <Link to="/" className=" button is-primary">
                  <span className="icon">
                   <i className="fa fa-arrow-left" />
                  </span>
                  <span>Back</span>
               </Link>
              </div>
            </div>
        </nav>




        <div className="content columns">
          <div className="column">
            {Crunchyroll.drawSettings()}
          </div>
        </div>

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
