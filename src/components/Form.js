import styles from './Form.module.css';
import useInput from './use-input';

const Form = props => {
  const {
    value: enteredName,
    enteredValueIsInvalid: enteredNameIsInvalid,
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(enteredName => enteredName.trim() !== '');
  const {
    value: enteredEmail,
    enteredValueIsInvalid: enteredEmailIsInvalid,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(
    enteredEmail => enteredEmail.includes('@') && enteredEmail.includes('.')
  );
  const {
    value: enteredAge,
    enteredValueIsInvalid: enteredAgeIsInvalid,
    isValid: ageIsValid,
    inputChangeHandler: ageChangeHandler,
    blurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(enteredAge => enteredAge > 1);

  const formIsValid = nameIsValid && emailIsValid && ageIsValid;

  const submitHandler = e => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log('submitted');
    resetName();
    resetEmail();
    resetAge();
  };

  const nameClass = !enteredNameIsInvalid
    ? styles.inputs
    : `${styles.inputs} ${styles.invalid}`;

  const emailClass = !enteredEmailIsInvalid
    ? styles.inputs
    : `${styles.inputs} ${styles.invalid}`;

  const ageClass = !enteredAgeIsInvalid
    ? styles.inputs
    : `${styles.inputs} ${styles.invalid}`;
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles['input-wrapper']}>
        <label>Name</label>
        <input
          className={nameClass}
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
        />
      </div>
      <div className={styles['input-wrapper']}>
        <label>Email</label>
        <input
          className={emailClass}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
        />
      </div>
      <div className={styles['input-wrapper']}>
        <label>Age</label>
        <input
          className={ageClass}
          value={enteredAge}
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          type="number"
          step="1"
          min="0"
        />
      </div>
      <div className={styles.button}>
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
