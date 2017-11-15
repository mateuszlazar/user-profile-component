import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ title, counter }) => (
  <div className={'counter'}>
    <p className={'counter__number'}>
      {counter}
    </p>
    <p className={'counter__title'}>
      {title}
    </p>
  </div>
);

Counter.propTypes = {
  title: PropTypes.string,
  counter: PropTypes.number
};

export default Counter;
