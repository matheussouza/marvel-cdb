import React, { useEffect } from 'react';
import Loading from '../../components/common/Loading';
import NavigationBar from '../../components/common/NavigationBar';
import Card from '../../components/common/Card';

export default ({ loading, series, page, total, loadSeriesRequest, character, history, loadDetailsRequest, match }) => {
  useEffect(() => { loadDetailsRequest(match.params.id) }, [loadDetailsRequest, match.params.id]);
  useEffect(() => { loadSeriesRequest(match.params.id) }, [loadSeriesRequest, match.params.id]);

  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="m-0">{character.name} - <small><i>Series</i></small></h2>
          <button className="btn btn-danger" onClick={() => history.push(`/${match.params.id}`)}>
            <i className="fa fa-arrow-circle-left" /> Back
          </button>
        </div>
        <hr />
        {
          loading ?
            <Loading />
            : (
              <div className="row">
                {
                  series.map(h => (
                    <div key={h.id} className="col-lg-3">
                      <Card name={h.title} imagePath={`${h.thumbnail.path}/portrait_uncanny.${h.thumbnail.extension}`} />
                    </div>
                  ))
                }
              </div>
            )
        }
      </div>
      <div className="row">
        <NavigationBar
          total={total}
          page={page}
          changePage={ (search, page) => loadSeriesRequest(match.params.id, page) }
        />
      </div>
    </div>
  );
};
