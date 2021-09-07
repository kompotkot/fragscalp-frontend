import React, { useEffect, useState } from "react"

import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/QuantityPrice.module.css"

const QuantityPrice = ({ row, selectPrice }) => {
	// const [positionState, setPositionState] = useState<number>(null)

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

	// Price hover highlighter
	const highlightPrice = (event) => {
		event.preventDefault()
		event.target.style.border = "1px solid white"
	}
	const unHighlightPrice = (event) => {
		event.preventDefault()
		event.target.style.border = null
	}

	return (
		<span
			className={`${styles.quantity_price} ${styles[rowClassType]} ${styles.noselect}`}
		>
			<span className={styles.quantity}>{row.quantity}</span>
			<span
				className={styles.price}
				onClick={selectPrice}
				onMouseEnter={(e) => highlightPrice(e)}
				onMouseLeave={(e) => unHighlightPrice(e)}
			>
				{row.price}
			</span>
		</span>
	)
}

export default QuantityPrice
