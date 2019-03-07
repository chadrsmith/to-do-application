import React, { Component } from 'react';
import nanoid from 'nanoid';
import TaskListItems from './TaskListItems';

export default class TaskListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskList: [
                {
                    key: 1213345,
                    text: 'Do CS371 Homework',
                    status: 'Backlog'
                },
                {
                    key: 2456485452,
                    text: 'Go to classes',
                    status: 'In Progress'
                },
                {
                    key: 2346535474,
                    text: 'Rock Climb / exercise',
                    status: 'To Do'
                },
                {
                    key: 34574568,
                    text: 'Clean apartment for cleaning checks.',
                    status: 'To Do'
                },
                {
                    key: 3457648568954,
                    text: 'Write a paper',
                    status: 'Completed'
                },
                {
                    key: 245367877453,
                    text: 'Finish Task Manager React app',
                    status: 'Completed'
                }
            ]
        }

        this.addTaskToList = this.addTaskToList.bind(this);
        this.removeTaskFromList = this.removeTaskFromList.bind(this);
        this.moveTask = this.moveTask.bind(this);
    }

    addTaskToList (columnName, taskText) {
        const newTask = {
            key: nanoid(),
            text: taskText,
            status: columnName
        }
        this.setState({ taskList: this.state.taskList.concat(newTask) })
    }

    moveTask (columnName, key) {
        const UPDATED_LIST = this.state.taskList.map(task => {
            
            if (task.key === key) {
                task.status = columnName;
            }
            return task;
        })
        this.setState({ taskList: UPDATED_LIST });
    }

    removeTaskFromList (key) {
        
        const LIST_FILTERED = this.state.taskList.filter(task =>task.key !== key);
        this.setState({ taskList: LIST_FILTERED });
    }

    

    render() {
        const taskList = this.state.taskList;

        return (
            <div className="main-content">
                <TaskListItems
                    name="Backlog"
                    addTask= { this.addTaskToList }
                    deleteTask= { this.removeTaskFromList }
                    moveRight= { key => this.moveTask('To Do', key) }
                    moveLeft= { key => this.moveTask('Completed', key) }
                    taskList= { taskList.filter(task => task.status === 'Backlog') } />
                <TaskListItems
                    name="To Do"
                    addTask= { this.addTaskToList }
                    deleteTask= { this.removeTaskFromList }
                    moveRight= { key => this.moveTask('In Progress', key) }
                    moveLeft= { key => this.moveTask('Backlog', key) }
                    taskList= { taskList.filter(task => task.status === 'To Do') } />
                <TaskListItems
                    name="In Progress"
                    addTask= { this.addTaskToList }
                    deleteTask= { this.removeTaskFromList }
                    moveRight= { key => this.moveTask('Completed', key) }
                    moveLeft= { key => this.moveTask('To Do', key) }
                    taskList= { taskList.filter(task => task.status === 'In Progress') } />
                <TaskListItems
                    name="Completed"
                    addTask= { this.addTaskToList }
                    deleteTask= { this.removeTaskFromList }
                    moveRight= { key => this.moveTask('Backlog', key) }
                    moveLeft= { key => this.moveTask('In Progress', key) }
                    taskList= { taskList.filter(task => task.status === 'Completed') } />
            </div>
        );
    }
}