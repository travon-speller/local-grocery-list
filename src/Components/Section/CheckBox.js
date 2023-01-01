import CheckBoxStyles from './CheckBox.css';
import React from 'react';
import { CHECKBOX_STATES } from '../../redux/constants/checkboxConstants';
import { updateList } from '../../redux/actions/listActions';
import { useDispatch } from 'react-redux';

const CheckBox = ({ label, value }) => {
  const checkboxRef = React.useRef();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(value || CHECKBOX_STATES.Empty);

  React.useEffect(() => {
    if (checked === CHECKBOX_STATES.Checked) {
      checkboxRef.current.checked = true;
      checkboxRef.current.indeterminate = false;
    } else if (checked === CHECKBOX_STATES.Empty) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (checked === CHECKBOX_STATES.Indeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [checked]);

  const onChange = async () => {
    let updatedChecked;

    if (checked === CHECKBOX_STATES.Checked) {
      updatedChecked = CHECKBOX_STATES.Empty;
    } else if (checked === CHECKBOX_STATES.Empty) {
      updatedChecked = CHECKBOX_STATES.Indeterminate;
    } else if (checked === CHECKBOX_STATES.Indeterminate) {
      updatedChecked = CHECKBOX_STATES.Checked;
    }

    dispatch(updateList(label, updatedChecked));
    setChecked(updatedChecked);
  };

  return (
    <div className="">
      <input
        type="checkbox"
        ref={checkboxRef}
        className=""
        id={label}
        checked={checked === CHECKBOX_STATES.Checked}
        onChange={onChange}
      />
      <label className="" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
