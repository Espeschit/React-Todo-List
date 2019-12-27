import React, { Component } from 'react';
import classes from './Input.module.css';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

class Input extends Component {

    state = {
        query: [],
        text: '',
        task: []
    };

    eventHandler = (event) => {
        this.setState({text: event.target.value})
    }

    newTaskHandler = () => {
        this.setState({ query: [...this.state.query, this.state.text]})
        const tasks = {
            task: this.state.text
        }
        axios.post(`https://react-todo-list-c3b70.firebaseio.com/tasks.json`, tasks)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    triggerDelete = () => {
        axios.delete(`https://react-todo-list-c3b70.firebaseio.com/tasks.json`, this.state.query)
        .then(response => {
            console.log(response)
        })
    }

    componentDidMount() {
        axios.get(`https://react-todo-list-c3b70.firebaseio.com/tasks.json`)
        .then(response => {
            let taskData = response.data;
                const task = Object.values(taskData)
                this.setState({task});
        })
        .catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <br/>
                {
                    this.state.task.map((t, index) => {
                    return (
                        <div key={index} style={{position: 'relative'}}>
                            <p className={classes.Task}>{t.task}</p>
                        </div>
                    )
                    })
                }
                {
                    this.state.query.map((t, index) => {
                    return (
                        <div key={index} style={{position: 'relative'}}>
                            <p className={classes.Task}>{t}</p>
                        </div>
                    )
                    })
                }
                <input type='text' onChange={this.eventHandler} className={classes.TaskName}/>
                <br/>
                <br/>
                <br/>
                <button disabled={!this.state.text} type='button' onClick={this.newTaskHandler} className={classes.Submit}><FaPlus style={{fontSize:'20px', paddingTop:'3px'}}/></button>
                <button onClick={this.triggerDelete} className={classes.Delete}><FaMinus style={{fontSize: '18px', paddingTop: '3px'}}/></button>
            </div>
        );
    }
}

export default Input;