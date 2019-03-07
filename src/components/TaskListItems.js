import React, { Component } from 'react';
import Task from './Task';

import "../style/TaskList.css";

export default class TaskListItems extends Component {

    constructor() {
        
        super();
        this.addTaskToList = this.addTaskToList.bind(this);
    }

    addTaskToList(e) {

        e.preventDefault();
        this.props.addTask(this.props.name, this._inputElement.value);
        this._inputElement.value = "";
    }

    render() {

        return (

            <div className= "taskListMain">
                <div className= "header">
                    <h4> { this.props.name } </h4>
                    <form onSubmit= { this.addTaskToList }>
                        <input ref= { (a) => this._inputElement = a } 
                            placeholder= "enter task" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <Task taskEntries= { this.props.taskList } 
                    deleteTask= { this.props.deleteTask } 
                    moveLeft= { this.props.moveLeft } 
                    moveRight= {this.props.moveRight } />            
            </div>
        );
    }
}