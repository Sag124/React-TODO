import React, { Component } from 'react'

export default class Todo extends Component {
 constructor() {
   super();
   this.state = {
     tasks: [
       { task: "Check emails", id: 1 },
       { task: "Do the assignemnt", id: 2 },
       { task: "Read Articles", id: 3 },
     ],
     curTask : ''
   };
 }

 handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(cur);
    this.setState({
     curTask : e.target.value
    })
 }

 addTask = () => {
  this.setState({
   tasks : [...this.state.tasks, {task : this.state.curTask, id : this.state.tasks.length + 1}],
   curTask : ''
  })
 }

 deleteTask = (id) => {
  let narr = this.state.tasks.filter((taskobj) => {
     return taskobj.id!=id
  })
  this.setState({
   tasks : [...narr]
  })
 }

 render() {
  return (
    <div>
      <input type='text' value = {this.state.curTask} onChange={this.handleChange}/>
      <button onClick={this.addTask} >Submit</button>
      <ul>
        {this.state.tasks.map((taskObj) => (
          <li key={taskObj.id}>
            <p>{taskObj.task}</p>
            <button onClick = {() => this.deleteTask(taskObj.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
 }
}

