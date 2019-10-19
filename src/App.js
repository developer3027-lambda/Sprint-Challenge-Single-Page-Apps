import React from "react";
import {Route} from 'react-router-dom';


import Header from "./components/Header.js";
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


// remove CharacterList
export default function App() {
  return (
    <main>
      <Header />
      
      <Route exact path='/WelcomePage' component={WelcomePage} />
      <Route exact path='/SearchForm' component={SearchForm} />
      <Route exact path='/CharacterList' component={CharacterList} />
    </main>
  );
}
