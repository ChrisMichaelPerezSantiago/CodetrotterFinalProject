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
        <nav className="nav">
          <div className="nav-left nav-menu">
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
