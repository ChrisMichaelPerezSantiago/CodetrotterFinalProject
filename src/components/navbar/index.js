// npm packages
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <nav className="nav">
    <div className="nav-left nav-menu">
      <div className="nav-item">
        <Link to="/" className="button is-primary">
          <span className="icon">
            <i className="fa fa-list" />
          </span>
          <span>All series</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/my" className="button is-primary">
          <span className="icon">
            <i className="fa fa-star" />
          </span>
          <span>My series</span>
        </Link>
      </div>
    </div>
    <div className="nav-right nav-menu">
      <div className="nav-item">
        <Link to="/settings" className="button is-info">
          <span className="icon">
            <i className="fa fa-cog" />
          </span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  </nav>

);