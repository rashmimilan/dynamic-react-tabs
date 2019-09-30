import React from 'react';
import {render} from 'react-dom';
import './style.css';
import {table1, table1_params} from './table1.js';
import {tabslist} from './tabsList.js';
import GetTabsList from './getTabsList.js';
export class App extends React.Component {
  render() {
        return (
          <GetTabsList tabslist={tabslist}  />
          );
    } 
}
export default App;
render(<App />, document.getElementById('root'));
