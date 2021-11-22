import React from 'react'

import styles from './Checkbox.module.css'

const Checkbox = ({
  label,
  inputName,
  inputType,
  inputValue,
  change,
  focus,
  errorText,
  checkbox,
}) => {


  return (
    <div className={styles.formField}>
      <div className={styles.checkBoxContainer}>
        <label>{label}</label>
        <input
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={change}
          onFocus={focus}
        />
      </div>
      {errorText}
    </div>
  )
}

export default Checkbox
