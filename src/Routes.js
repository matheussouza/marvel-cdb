import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import CharactersSeries from './pages/CharactersSeries';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div style={{ marginTop: 80 }}>
      <Switch>
        <Route exact path="/" component={CharactersList} />
        <Route exact path="/:id" component={Character} />
        <Route exact path="/:id/series" component={CharactersSeries} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
