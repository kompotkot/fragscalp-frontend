import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/Position.module.css"

const Position = ({ positionState, row }) => {
	let rowClassType

	return (
		<span className={styles.position}>
			{positionState === row.price.toString()
				? <div className={styles.active}>←</div>
				: ""}
		</span>
	)
}

export default Position
