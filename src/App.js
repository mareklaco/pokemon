import React, {Component} from 'react';
import './App.css';
import List from "./List";
import Pokemon from "./Pokemon";

/**
 * Kontroller aplikacie.
 *
 * Nacitava data z API (zoznam/jeden pokemon) a zobrazuje <List/> a <Pokemon/>
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <List
          onClick={console.log}
          list={[
          {
            name: 'pikacu',
          },
          {
            name: 'ferko',
          },
          ]}
        />
        <Pokemon pokemon={{
          name: 'Pikacu',
          imageUrl: 'http://123',
        }}/>
      </div>
    )
  }
}

export default App
