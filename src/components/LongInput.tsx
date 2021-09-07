import styles from "../styles/LongInput.module.css"

const LongInput = ({ ...rest }) => {
	return (
		<div className={styles.wr}>
			<input className={styles.input} {...rest} />
		</div>
	)
}

export default LongInput
