import styles from "../styles/ShortButton.module.css"

const ShortButton = ({ ...rest }) => {
	return (
		<span className={styles.wrapper}>
			<button className={styles.button} {...rest}></button>
		</span>
	)
}

export default ShortButton
