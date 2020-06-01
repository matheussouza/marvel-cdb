import React, { useState } from 'react';

export default ({ character, back, update }) => {
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description || '');

  const confirmCancel = () => {
    return window.confirm('Your changes will be lost. Do you want to proceed?');
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className="m-0 d-inline">Update data</h3>
        </div>
        <div className="d-none d-sm-block">
          <button
            data-testid="save-computer"
            className="btn btn-primary"
            onClick={ () => {
              update(name, description);
              back();
            }}
          >
            Save
          </button>
          <button
            data-testid="cancel-computer"
            className="btn btn-secondary"
            onClick={() => {
              if (confirmCancel())
                back();
            }}
            style={{ marginLeft: 10 }}
          >
            Cancel
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="form-group">
          <label>Name</label>
          <input data-testid="name-input" type="text" className="form-control" value={name} onChange={ (event) => setName(event.target.value) } />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            data-testid="description-input"
            className="form-control"
            onChange={ (event) => setDescription(event.target.value) }
            value={description || 'Description unavailable.'}
          />
        </div>
        <div className="d-sm-none" style={{ paddingBottom: 20 }}>
          <button
            data-testid="save-mobile"
            className="btn btn-primary"
            onClick={ () => {
              update(name, description);
              back();
            }}
          >
            Save
          </button>
          <button
            data-testid="cancel-mobile"
            className="btn btn-secondary"
            onClick={() => {
              if (confirmCancel())
                back();
            }}
            style={{ marginLeft: 10 }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
