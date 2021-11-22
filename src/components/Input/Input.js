import React from "react";

import styles from './Input.module.css'


const Input = ({ label, inputName, inputType, inputValue, change, focus, errorText, errors, touched }) => {

  return (
    <div className={styles.formField}>
      <label>{label}</label>
      <input
        className={
          errors && touched ? styles.uncompleted : styles.formInput
        }
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={change}
        onFocus={focus}
        />
      {errorText}
    </div>
  )
}

export default Input