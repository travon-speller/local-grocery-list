import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Row from './Components/Layout/Row';
import Column from './Components/Layout/Column';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  };

  render() {
    const { list } = this.props;
    return (
      <div className="App">
        <Header />
        <>
          <Row>
            {list?.map((grocery) => (
              <Column key={grocery.sectionHeader}>
                <Section sectionHeader={grocery.sectionHeader} items={grocery.items} />
              </Column>
            ))}
          </Row>
        </>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    list: state.list
  };
})(App);
