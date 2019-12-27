import React, { Component } from 'react';
import classes from './Canvas.module.css';
import Header from '../Components/Header';
import Input from '../Components/Input';

class Canvas extends Component {
    render() {
        return (
            <div className={classes.Window}>
                <Header> TO DO LIST </Header>
                <Input/>
            </div>
        );
    }
}

export default Canvas;