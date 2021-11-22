import styles from './Form.module.css'

const Form = ({ submit, log, children }) => {
  return (
    <form onSubmit={submit} className={styles.formContainer}>
      <h2 className={styles.header}>{log}</h2>
      {children}
    </form>
  )
}

export default Form
