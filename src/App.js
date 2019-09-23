import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  return (
    <main className="App">
      <WelcomePage />
      <SearchForm />
      <Header />
      <CharacterList />

      <Route exact path='/'component={WelcomePage} />
      <Route path='character/:id' component={CharacterList} />
    </main>
  );
}

export default App;

