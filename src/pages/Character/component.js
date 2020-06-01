import React, { useEffect, useState } from 'react';

import Loading from '../../components/common/Loading';
import CharacterForm from '../../components/Character/Form';
import CharacterDetail from '../../components/Character/Detail';

export default ({ charDetails, loading, loadDetailsRequest, updateDetails, history, match }) => {
  const { id } = match.params;

  const [mode, setMode] = useState('show');
  
  useEffect(() => {
    loadDetailsRequest(id)
  }, [loadDetailsRequest, id]);

  if (loading)
    return <Loading />;

  return (
    <div className="container" style={{ marginBottom: 20 }}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="m-0">{charDetails.name}</h2>
        <button className="btn btn-danger" onClick={() => history.push(`/`)}>
          <i className="fa fa-arrow-circle-left" /> Back
        </button>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <img className="w-100" src={`${charDetails.thumbnail.path}/detail.${charDetails.thumbnail.extension}`} alt={charDetails.name} />
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
