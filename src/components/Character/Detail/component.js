import React from 'react';

export default ({ character, edit, history }) => {
  return (
    <div>
      <p>
        <i data-testid="description">{character.description || 'Description unavailable.'}</i>
      </p>
      <hr />
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h5>Extras</h5>
          <div>
            <button
              data-testid="series-btn"
              disabled={ character.series.available === 0 }
              className="btn btn-primary"
              onClick={ () => history.push(`/${character.id}/series`) }
            >
              Series
            </button>
            <button
              data-testid="edit-btn"
              className="btn btn-warning"
              style={{ marginLeft: 10 }}
              onClick={ () => edit() }
            >
              <i className="fa fa-edit" /> Edit
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
};
