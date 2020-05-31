import React, { useState } from 'react';

const CharacterForm = (props) => {
  const { back, update } = props;
  const { character } = props;

  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description || '');

  const confirmCancel = () => {
    return window.confirm('Your changes will be lost. Do you want to proceed?');
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ margin: 0, display: 'inline' }}>Update data</h3>
        </div>
        <div className="d-none d-sm-block">
          <button
            className="btn btn-primary"
            onClick={ () => {
              update(name, description);
              back();
            }}
          >
            Save
          </button>
          <button className="btn btn-secondary" onClick={() => {
            if (confirmCancel())
              back();
            }}
            style={{ marginLeft: 10 }}>
              Cancel
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={ (event) => setName(event.target.value) } />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            onChange={ (event) => setDescription(event.target.value) }
            value={description || 'Description unavailable.'}
          />
        </div>
        <div className="d-sm-none" style={{ paddingBottom: 20 }}>
          <button
            className="btn btn-primary"
            onClick={ () => {
              update(name, description);
              back();
            }}
          >
            Save
          </button>
          <button className="btn btn-secondary" onClick={() => {
            if (confirmCancel())
              back();
            }}
            style={{ marginLeft: 10 }}>
              Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterForm;
