import ItemListStyles from './ItemList.css';
import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import CheckBox from './CheckBox';

class ItemList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <>
        <ListGroup as="dl">
          {this.props.items?.map((item) => (
            <ListGroup.Item key={item.name} as="dt" className="itemList">
              <CheckBox label={item.name} value={item.status} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}
export default ItemList;
