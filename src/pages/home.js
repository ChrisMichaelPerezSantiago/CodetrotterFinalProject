// npm packages
import _ from 'lodash';
import React from 'react';
import {Observable} from 'rxjs';
// my packages
import db from '../db';
import {Crunchyroll} from '../api';
// my components
import Navbar from '../components/navbar';
import Series from '../components/series';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      series: [],
    };

    // trigger list update
    Crunchyroll.getAllSeries();
  }

  componentDidMount() {
    this.sub = Observable.fromEvent(
      db.series.changes({
        since: 0,
        live: true,
        include_docs: true,
      }),
      'change'
    )
      .filter(change => !change.deleted)
      .map(change => change.doc)
      .scan((acc, doc) => acc.concat([doc]), [])
      .debounceTime(1000)
      .subscribe(series => this.setState({series}));
  }

  componentWillUnmount() {
    this.sub.unsubscribe();
  }

  render() {
    const {series} = this.state;


    return (
      <div>
        <Navbar />

        {_.chunk(series, 4).map((chunk, i) => (
          <div key={`chunk_${i}`} className="tile is-ancestor">
            {chunk.map(s => <Series key={s._id} series={s} />)}
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
