import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

class Section extends React.PureComponent {
  static propTypes = {
    sectionHeader: PropTypes.string,
    items: PropTypes.array
  };

  render() {
    return (
      <>
        <h1>{this.props.sectionHeader}</h1>
        <ItemList items={this.props.items} />
      </>
    );
  }
}

export default Section;
