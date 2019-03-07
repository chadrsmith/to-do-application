import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.css";

import TaskListContainer from './components/TaskListContainer';

var destination = document.querySelector("#root");

ReactDOM.render(
    <div className= "main-content">
        <TaskListContainer />
    </div>,
    destination
);