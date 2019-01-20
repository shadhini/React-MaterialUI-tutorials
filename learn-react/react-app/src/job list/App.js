//import React from 'react'; // if we use this, we have to extend from React.Component
import React, { Component } from 'react'; // now, we are loading the Component as a property of React, so we no longer need to extend React.Component
import Table from './SimpleComponents/Table';
import Form from './Form';

// create the App component
class App extends Component {
    state = {
        characters: [
        ]        
    };

    removeCharacter = index => {
        const  characters  = this.state.characters;
    
        this.setState({
            characters: characters.filter((character, i) => {  // filter does not mutate but rather creates a new array,
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {

        const characters = this.state.characters;

        return (
            // <div className="App">
            //     <h1>Hello, React!</h1>
            // </div>
            //  pass the removeCharacter function through as a prop to Table.
            <div className="container">
                <Table 
                characterData={characters}
                removeCharacter={this.removeCharacter} /> 
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

// We export the component as App and load it in index.js.
export default App;