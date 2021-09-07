import styles from "../styles/LongSelect.module.css"

const LongSelect = ({ ...rest }) => {
	return (
		<span className={styles.wr}>
			<select className={styles.input} {...rest} />
		</span>
	)
}

export default LongSelect
