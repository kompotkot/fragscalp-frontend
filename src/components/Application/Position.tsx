import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/Position.module.css"

const Position = ({ position, row }) => {
	let rowClassType

	return (
		<span className={styles.position}>
			{position?.price === row.price ? (
				<div className={styles.active}>←</div>
			) : (
				""
			)}
		</span>
	)
}

export default Position
