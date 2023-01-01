import React from 'react';
import './Column.css';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    const { children } = this.props;
    return <div className={'column'}> {children} </div>;
  }
}

export default Column;
