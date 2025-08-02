import './App.css';
import Header from './Components/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemList from './Components/Section/ItemList';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import CheckBox from './Components/Section/CheckBox';
import { CHECKBOX_STATES } from './redux/constants/checkboxConstants';

class App extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  };

  render() {
    const { list } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <>
            <Container>
              <Row xs={2} md={3} lg={3}>
                {list?.map((grocery) => (
                  // eslint-disable-next-line react/jsx-key
                  <Card key={grocery.sectionHeader} style={{}}>
                    <Card.Header as="h3">{grocery.sectionHeader}</Card.Header>
                    <ItemList items={grocery.items} />
                  </Card>
                ))}
              </Row>
            </Container>
            <div className="key">
              <OverlayTrigger
                trigger={['click']}
                key={'left'}
                placement={'left'}
                overlay={
                  <Popover id={'popover-positioned-left'}>
                    <Popover.Header as="h3">{'Key'}</Popover.Header>
                    <Popover.Body>
                      <CheckBox label={'Need To Grab'} disabled />
                      <CheckBox label={'Already Have At Home'} value={CHECKBOX_STATES.Indeterminate} disabled />
                      <CheckBox label={'In The Cart'} value={CHECKBOX_STATES.Checked} disabled />
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary">
                  <i className="fa fa-key" aria-hidden="true"></i>
                </Button>
              </OverlayTrigger>
            </div>
          </>
        </header>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    list: state.list
  };
})(App);
