import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CharactersList from './pages/CharactersList';
import CharacterSeries from './pages/CharacterSeries';
import Character from './pages/Character';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div style={{ marginTop: 80 }}>
      <Switch>
        <Route exact path="/" component={CharactersList} />
        <Route exact path="/:id" component={Character} />
        <Route exact path="/:id/series" component={CharacterSeries} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
