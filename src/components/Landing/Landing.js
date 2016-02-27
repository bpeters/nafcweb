import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import styles from './styles';


class Landing extends Component {

  render() {
    return (
      <div>
        <img
        classname='logo'
        src='../../public/Logo'
        />
        <div className= 'about' >
          Lets help you send better messages to avoid a
          fight, after all its not a fight club! Type a message
          get a sentiment score. Green is great,  anything
          else and you are on your own
        </div>
        <img
        className='phone'
        src='../../public/Phone'
        />

      </div>
    );
  }

}

export default  radium(Landing);
