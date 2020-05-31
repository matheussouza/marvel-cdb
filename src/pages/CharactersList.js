import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../components/Loading';
import NavigationBar from '../components/NavigationBar';
import { loadCharactersRequest } from '../store/ducks/characters';
import Card from '../components/Card';

const CharactersList = (props) => {
  const { loading, chars, charSearch, page, modified, total, loadCharactersRequest, history } = props;

  useEffect(() => { loadCharactersRequest() }, [loadCharactersRequest]);

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

const mapStateToProps = (state) => ({
  loading: state.characters.loading,
  chars: state.characters.data,
  charSearch: state.characters.search,
  total: state.characters.total,
  page: state.characters.page,
  modified: state.detail.changed,
})

const mapDispatchToProps = { loadCharactersRequest }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersList));
