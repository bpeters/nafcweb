import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.scss';

class Landing extends Component {

  render() {
    return (
      <div className={s.landing}>
        <img
          className= {s.logo}
          src='../../Logo.png'
        />
        <div className={s.about}>
          Let's help you send better messages to avoid a
          fight, after all it's not a fight club! Type a message
          get a sentiment score. Green is great, anything
          else and you are on your own.
        </div>
        <img
          className={s.apple}
          src='../../app-store-badge.png'
        />
        <img
          className={s.phone}
          src='../../webphone@2x.png'
        />
      </div>
    );
  }

}

export default withStyles(Landing, s);
