import React from "react";
// import {Route, Link} from 'react-router-dom';
import Header from "./components/Header.js";
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <WelcomePage />
      { /*<Route path='' component={} />*/ }
    </main>
  );
}
