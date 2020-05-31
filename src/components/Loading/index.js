import React from 'react';
import loadingImage from '../../assets/img/loading.png';

const Loading = () => (
  <div className="loading-container">
    <img src={loadingImage} className="mdb-loading" alt="Loading" />
  </div>
);

export default Loading;
