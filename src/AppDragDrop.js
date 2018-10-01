import React, {Component} from 'react';
import './AppDragDrop.css';

export default class AppDragDrop extends Component {
  state = {
    tasks: [
      {name:"Angular", category:"wip", bgcolor:"yellow"},
      {name:"React", category:"wip", bgcolor:"skyblue"},
      {name:"Vue", category:"complete", bgcolor:"pink"}
    ]
  }
  
  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if(task.name === id) {
        task.category = cat;        
      }

      return task;
    });
    
    this.setState({
      ...this.state,
      tasks
    });

    console.log(this.state);
  }

  render() {
    var tasks = {
      wip: [],
      complete: []
    }

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name} 
            draggable  
            onDragStart = {(e) => this.onDragStart(e, t.name)}
            className="draggable"
            style = {{backgroundColor: t.bgcolor}}
        >
          {t.name}
        </div>
      )
    });

    return(
      <div className="container-drag">
        <h2 className="header">Drag & Drop</h2>
        <div className="wip"
            onDragOver = {(e) => this.onDragOver(e)}
            onDrop = {(e) => this.onDrop(e, 'wip')}
        >
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div> 

        <div className="droppable"
            onDragOver = {(e) => this.onDragOver(e)}
            onDrop = {(e) => this.onDrop(e, 'complete')}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}