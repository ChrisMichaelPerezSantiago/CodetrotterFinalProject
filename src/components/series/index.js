// npm packages
import React from 'react';
import {withRouter} from 'react-router-dom';

// my packages
import db from '../../db';

export default withRouter(({series, history}) => {
  const openSeriesPage = async () => {
    // but you can use a location instead
    const location = {
      pathname: `/series${series._id}`,
      state: series,
    };

    try{
      const doc = await db.current.get('series');
      const update = {
        _id: 'series',
        data: series,
      };

      if (doc) {update._rev = doc._rev;}
      await db.current.put(update);

    }catch(e){
      history.push(location);
    }
  };


  return (
    <div className="tile is-parent is-3">
      <div className="tile is-child">
        <div className="card" onClick={openSeriesPage}>
          <div className="card-image">
            <figure className="image">
              <img src={series.image} alt={series.title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4"><strong>{series.title}</strong></p>
                <p className="subtitle is-6"><small>{series.count} Episodes </small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
