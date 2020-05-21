import React, { Component } from 'react';

import './App.css';
import Contact from './components/Contact';
import { StyledButton } from './styles/elements';
import { Theme } from './styles/themes';

class App extends Component {
  state = {
    showContacts: true,
    dark: true
  }

  togglePersons = () => {
    let showContacts = this.state.showContacts;
    this.setState({ showContacts: !showContacts })
  }

  render() {
    return (
      <div className="App">
        <Theme dark={this.state.dark}>
          <h1>My contacts</h1>

          {/* <button onClick={this.togglePersons}>Toggle contacts</button> */}
          <StyledButton show={this.state.showContacts} onClick={this.togglePersons}>Toggle contacts</StyledButton>

          { this.state.showContacts 
            ? (<div>
              <Contact name="Alex" project="Aplantida" />
              <Contact name="Maxime" project="Hueco" />
              <Contact name="Siiri" project="Bus Stops" />
              <Contact name="Ricard" project="U-On" />
            </div>)
            : null
          }

        </Theme>
      </div>
    )
  }
}

export default App;
