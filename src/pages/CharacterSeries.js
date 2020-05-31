import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../components/Loading';
import NavigationBar from '../components/NavigationBar';
import { loadSeriesRequest } from '../store/ducks/series';
import { loadDetailsRequest } from '../store/ducks/detail';
import Card from '../components/Card';

const CharactersSeries = (props) => {
  const { loading, series, page, total, loadSeriesRequest, character, history, loadDetailsRequest } = props;
  const { match } = props;

  useEffect(() => { loadDetailsRequest(match.params.id) }, [loadDetailsRequest, match.params.id]);
  useEffect(() => { loadSeriesRequest(match.params.id) }, [loadSeriesRequest, match.params.id]);

  return (
    <div>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0 }}>{character.name} - <small><i>Series</i></small></h2>
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

const mapStateToProps = (state) => ({
  series: state.series.data,
  loading: state.series.loading,
  page: state.series.page,
  total: state.series.total,
  character: state.detail.data
})

const mapDispatchToProps = { loadSeriesRequest, loadDetailsRequest }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersSeries));
