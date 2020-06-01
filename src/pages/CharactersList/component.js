import React, { useEffect } from 'react';
import qs from 'qs'

import Loading from '../../components/common/Loading';
import NavigationBar from '../../components/common/NavigationBar';
import Card from '../../components/common/Card';

export default ({ loading, chars, charSearch, page, modified, total, loadCharactersRequest, history, location }) => {
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })
  useEffect(() => { loadCharactersRequest(queryParams.search || '') }, [loadCharactersRequest, queryParams.search]);

  const getUpdatedName = char => modified.hasOwnProperty(char.id) ? modified[char.id].name : char.name;
  
  return (
    <div className="container">
      <h2 style={{ margin: 0 }}>Characters DB</h2>
      {
        !charSearch
          ? <></>
          : <h6><i>Results of search by: <b>{charSearch}</b></i></h6>
      }
      <hr />
      {
        loading ?
          <Loading />
          : (
            <div className="row">
              {
                chars.map(h => (
                  <div key={h.id} className="col-lg-3" style={{ cursor: 'pointer' }} onClick={ () => history.push(`/${h.id}`) }>
                    <Card name={getUpdatedName(h)} imagePath={`${h.thumbnail.path}/landscape_incredible.${h.thumbnail.extension}`} />
                  </div>
                ))
              }
            </div>
          )
      }
      <div className="row">
        <NavigationBar
          total={total}
          page={page}
          search={charSearch}
          changePage={ (search, page) => loadCharactersRequest(search, page) }
        />
      </div>
    </div>
  );
};
