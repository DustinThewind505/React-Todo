import React from 'react';
import './App.css';

const bullShit = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: bullShit,
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.list.map(element =>
          <div>
            <h4>{element.id}</h4>
            <h4>{element.task}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default App;
