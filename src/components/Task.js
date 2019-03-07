import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import '../style/TaskList.css';

export default class Task extends Component {

    constructor() {
        super();
        this.createTask = this.createTask.bind(this);
    }

    createTask(task) {
        if (task.status === 'Backlog') {
            return <li key= { task.key }>
                <div className="taskContainer">
                    <button 
                        onClick= { () => this.props.moveLeft (task.key) } disabled>
                        Left 
                    </button>
                    <button id="bt-remove" 
                        onClick= { () => this.props.deleteTask (task.key) }>
                        remove
                    </button>
                    <button 
                        onClick= { () => this.props.moveRight (task.key) }>
                        Right
                    </button>
                </div>
                <div className="taskParagraph">
                    <p>{ task.text }</p>
                </div>
            </li>
        }
        else if (task.status === 'Completed') {
            return <li key= { task.key }>
                <div className="taskContainer">
                    <button 
                        onClick= { () => this.props.moveLeft (task.key) }>
                        Left 
                    </button>
                    <button id="bt-remove" 
                        onClick= { () => this.props.deleteTask (task.key) }>
                        remove
                    </button>
                    <button disabled>
                        Right
                    </button>
                </div>
                <div className="taskParagraph">
                    <p>{ task.text }</p>
                </div>
            </li>
        }
        else {
            return <li key= { task.key }>
                <div className="taskContainer">
                    <button 
                        onClick= { () => this.props.moveLeft (task.key) }>
                        Left 
                    </button>
                    <button id="bt-remove" 
                        onClick= { () => this.props.deleteTask (task.key) }>
                        remove
                    </button>
                    <button 
                        onClick= { () => this.props.moveRight (task.key) }>
                        Right
                    </button>
                </div>
                <div className="taskParagraph">
                    <p>{ task.text }</p>
                </div>
        </li>
        }
  
    }

    render() {

        var taskEntry = this.props.taskEntries.map(this.createTask);

        return (
            <ul className= "taskList">
            <FlipMove duration= { 350 } easing="ease-out">
                { taskEntry }
            </FlipMove>
            </ul>
        );
    }
}