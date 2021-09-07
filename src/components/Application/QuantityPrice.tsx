import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/QuantityPrice.module.css"

const QuantityPrice = ({ row }) => {
	let rowClassType
	if (row.position === "ask" && row.quantity !== 0) {
		rowClassType = "ask_row"
	} else if (row.position === "ask" && row.quantity === 0) {
		rowClassType = "ask_row_empty"
	} else if (row.position === "bid" && row.quantity !== 0) {
		rowClassType = "bid_row"
	} else if (row.position === "bid" && row.quantity === 0) {
		rowClassType = "bid_row_empty"
	} else {
		rowClassType = "mid_row"
	}

	return (
		<span className={`${styles.quantity_price} ${styles[rowClassType]}`}>
			<span className={styles.quantity}>
				{row.quantity}
			</span>
			<span className={styles.price}>
				{row.price}
			</span>
		</span>
	)
}

export default QuantityPrice
