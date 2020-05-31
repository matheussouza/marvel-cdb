import React from 'react';
import { withRouter } from 'react-router-dom';

const CharacterDetail = (props) => {
  const { character, edit, history } = props;
  
  return (
    <div>
      <p>
        <i>{character.description || 'Description unavailable.'}</i>
      </p>
      <hr />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h5>Extras</h5>
          <div>
            <button disabled={ character.series.available === 0 } className="btn btn-primary" onClick={ () => history.push(`/${character.id}/series`) }>Series</button>
            <button className="btn btn-warning" style={{ marginLeft: 10 }} onClick={ () => edit() }><i className="fa fa-edit" /> Edit</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
};



export default withRouter(CharacterDetail);
