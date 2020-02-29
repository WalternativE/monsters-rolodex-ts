import React, { Component } from "react";
import "./App.css";

import { Monster } from "./types/app.types";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

type AppState = {
  monsters: Monster[];
  searchField: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  onSearchChange = (event: React.FormEvent<HTMLInputElement>) =>
    this.setState({ searchField: event.currentTarget.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
}

export default App;
