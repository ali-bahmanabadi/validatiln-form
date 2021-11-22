import { Link } from 'react-router-dom'
import styles from './Button.module.css'

const Button = ({ anker, to, buttonName }) => {
  return (
    <div className={styles.formButtons}>
      <Link to={to}>{ anker }</Link>
      <button type="submit">{ buttonName }</button>
    </div>
  )
}

export default Button 