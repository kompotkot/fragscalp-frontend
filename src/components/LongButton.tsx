import styles from "../styles/LongButton.module.css"

const LongButton = ({ ...rest }) => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button} {...rest}></button>
		</div>
	)
}

export default LongButton
