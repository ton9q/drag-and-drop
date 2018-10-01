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
  
  render() {
    var tasks = {
      wip: [],
      complete: []
    }

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name} 
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
        <div className="wip">
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div className="droppable">
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}