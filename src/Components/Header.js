import React, { Component } from 'react';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render() {
        return (
            <div>
            <p className={classes.HeroSection}>{this.props.children}</p>
            <FontAwesomeIcon className={classes.Icons} icon={faSnowflake} />
            </div>
        );
    }
}

export default Header