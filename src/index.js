import React from 'react';
import { render } from 'react-dom';
import './css/mystyles.scss';
import Hello from './Hello';

const App = () => (
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <div class="control">
        <input class="input" type="text" placeholder="Search Favorites"></input>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </p>
  </div>
);

render(<App />, document.getElementById('root'));
