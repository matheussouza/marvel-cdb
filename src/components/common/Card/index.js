import React from 'react';
import defaultPath from '../../../assets/img/landscape_not_available.jpg';

export default ({ imagePath, name }) => {
  return (
    <div className="card text-center app-card">
      <img src={imagePath || defaultPath} className="card-img-top" alt={name} />
      <div className="card-body app-card-body">
        <h5 className="card-title app-container-reset">{name}</h5>
      </div>
    </div>
  )
}
