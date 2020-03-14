import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './components/TodoList';
import ListForm from './components/TodoForm';
import './App.css';

const tasks = [
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

  constructor() {
    super();
    this.state = {
      taskList: tasks
    };

  }


  toggleItem = clickedId => {

    const newTaskList = this.state.taskList.map(item => {

      if (item.id === clickedId) {
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    });

    this.setState({
      taskList: newTaskList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      taskList: [...this.state.taskList, newItem]
    });
  };

  clearPurchased = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => {
        return !item.purchased;
      })
    });
  };


  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>Things to do today</h1>
          <ListForm addNewItem={this.addNewItem} />
        </div>
        <TaskList
          tasks={this.state.taskList}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
