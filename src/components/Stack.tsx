import styles from "../styles/Stack.module.css"

const Stack = ({ children }) => {
	return <div className={styles.stack}>{children}</div>
}

export default Stack