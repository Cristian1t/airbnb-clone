import React, { Component } from 'react';
import './SearchBox.css';

export class SearchBox extends Component {
  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do.</h1>

        <form className="search-box-form">
          <div className="col m12">
            <div className="input-field" id="where">
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
