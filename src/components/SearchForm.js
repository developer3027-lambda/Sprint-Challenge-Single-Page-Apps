import React, { useState } from "react";
import './Components.css';

export default function SearchForm() {
 
  return (
    <section className="search-form">
    
      <form className='formSearch'>
      <span className='link1'>Character List</span>
      <div className='search'>
        <input className=''
        type='text'
        placeholder='Search' />
        <button className=''>Go</button>
        </div>
      </form>
    </section>
  );
}
