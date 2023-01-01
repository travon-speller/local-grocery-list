import './Row.css';
import React from 'react';
import PropTypes from 'prop-types';

class Row extends React.Component {
  static propTypes = {
    children: PropTypes.array
  };

  render() {
    const { children } = this.props;
    return <div className={'row'}>{children}</div>;
  }
}

export default Row;
