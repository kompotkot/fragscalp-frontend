import styles from "../styles/ShortInput.module.css"

const ShortInput = ({ ...rest }) => {
	return (
		<span className={styles.wr}>
			<input className={styles.input} {...rest} />
		</span>
	)
}

export default ShortInput
