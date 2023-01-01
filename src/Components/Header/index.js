import React from 'react';
import { CHECKBOX_STATES } from '../../redux/constants/checkboxConstants';
import CheckBox from '../Section/CheckBox';

class Header extends React.PureComponent {
  render = () => (
    <>
      <h1>Grocery List</h1>
      <div style={{ textAlign: 'left', borderStyle: 'dashed', margin: 'auto', width: '50%' }}>
        <h3>Key:</h3>
        <CheckBox label={'Need To Grab'} disabled />
        <CheckBox label={'Already Have At Home'} value={CHECKBOX_STATES.Indeterminate} disabled />
        <CheckBox label={'In The Cart'} value={CHECKBOX_STATES.Checked} disabled />
      </div>
    </>
  );
}

export default Header;
