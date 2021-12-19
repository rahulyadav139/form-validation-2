import { useState } from 'react';

const useInput = validateFun => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = validateFun(value);
  const enteredValueIsInvalid = !validateFun(value) && touched;

  const inputChangeHandler = e => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setTouched(true);
  };
  const reset = () => {
    setValue('');
    setTouched(false);
  };
  return {
    value,
    enteredValueIsInvalid,
    isValid,
    inputChangeHandler,
    blurHandler,
    reset,
  };
};
export default useInput;
