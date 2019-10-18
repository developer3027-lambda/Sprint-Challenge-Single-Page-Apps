import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
    <p>Character List</p>
      <form>
        <input 
        type='text'
        placeholder='Search' />
        <button>Go</button>
      </form>
    </section>
  );
}
