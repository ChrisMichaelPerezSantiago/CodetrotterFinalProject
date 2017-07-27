// npm packages
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';


export default () => (
  //<nav className="nav">
  //  <div className="nav-left nav-menu">
  //    <div className="nav-item">
  //      <Link to="/" className="button is-primary">
  //        <span className="icon">
  //          <i className="fa fa-list" />
  //        </span>
  //        <span>All series</span>
  //      </Link>
  //    </div>
  //    <div className="nav-item">
  //      <Link to="/my" className="button is-primary">
  //        <span className="icon">
  //          <i className="fa fa-star" />
  //        </span>
  //        <span>My series</span>
  //      </Link>
  //    </div>
  //  </div>
  //  <div className="nav-right nav-menu">
  //    <div className="nav-item">
  //      <Link to="/settings" className="button is-info">
  //        <span className="icon">
  //          <i className="fa fa-cog" />
  //        </span>
  //        <span>Settings</span>
  //      </Link>
  //    </div>
  //  </div>
  //</nav>

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
