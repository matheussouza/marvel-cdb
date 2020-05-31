import React from 'react';

const Card = ({ imagePath, name }) => {
  return (
    <div className="card text-center" style={{ marginBottom: 20 }}>
      <img src={imagePath} className="card-img-top" alt={name} />
      <div className="card-body" style={{ padding: 8, minHeight: 76, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h5 style={{ margin: 0 }} className="card-title">{name}</h5>
      </div>
    </div>
  )
}

export default Card;
