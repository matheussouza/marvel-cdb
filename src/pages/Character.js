import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadDetailsRequest, updateDetails } from '../store/ducks/detail';

import Loading from '../components/Loading';
import CharacterForm from './CharacterForm';
import CharacterDetail from './CharacterDetail';

const Character = (props) => {
  const { loadDetailsRequest, updateDetails } = props;
  const { charDetails, loading, history } = props;
  const { id } = props.match.params;

  const [mode, setMode] = useState('show');
  
  useEffect(() => {
    loadDetailsRequest(id)
  }, [loadDetailsRequest, id]);

  if (loading)
    return <Loading />;

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>{charDetails.name}</h2>
        <button className="btn btn-danger" onClick={() => history.push(`/`)}>
          <i className="fa fa-arrow-circle-left" /> Back
        </button>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <img src={`${charDetails.thumbnail.path}/detail.${charDetails.thumbnail.extension}`} alt={charDetails.name} style={{ width: '100%' }} />
        </div>
        <div className="col-lg-6 col-xs-12" style={{ paddingTop: 10 }}>
          {
            mode === 'show'
              ? <CharacterDetail character={charDetails} edit={() => setMode('edit')} />
              : <CharacterForm
                  character={charDetails}
                  back={() => setMode('show')}
                  update={(name, description) => {
                    updateDetails({ id: charDetails.id, name, description })
                  }} />
          }
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  charDetails: state.detail.data,
  loading: state.detail.loading,
});

const mapDispatchToProps = {
  loadDetailsRequest, updateDetails
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Character));
