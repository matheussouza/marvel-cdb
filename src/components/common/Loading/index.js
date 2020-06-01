import React from 'react';
import loadingImage from '../../../assets/img/loading.png';

export default () => (
  <div className="loading-container">
    <img src={loadingImage} className="mdb-loading" alt="Loading" />
  </div>
);
