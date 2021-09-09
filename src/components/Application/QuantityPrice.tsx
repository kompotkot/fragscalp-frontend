import React, { useEffect, useState } from "react"

import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/QuantityPrice.module.css"

const QuantityPrice = ({ row, selectPrice, maxVolumeFill }) => {
	// const [positionState, setPositionState] = useState<number>(null)

	// const maxVolumeFill = 10
	console.log(row.price % 10)

	let rowClassType
	if (row.position === "ask" && row.quantity !== 0) {
		rowClassType = "ask_row"
	} else if (row.position === "ask_hard") {
		rowClassType = "ask_row_hard"
	} else if (row.position === "ask" && row.quantity === 0) {
		rowClassType = "ask_row_empty"
	} else if (row.position === "bid" && row.quantity !== 0) {
		rowClassType = "bid_row"
	} else if (row.position === "bid_hard") {
		rowClassType = "bid_row_hard"
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

	const calcVolumeFill = (quantity: number): string => {
		/*
		Number of percentWidthSpanValue is from CSS calculated as 
		"quantity span" + "price span"
		*/
		const percentWidthSpanValue = 60
		if (quantity < maxVolumeFill) {
			return (quantity * percentWidthSpanValue) / maxVolumeFill + "%"
		}

		return 60 + "%"
	}

	return (
		<span
			className={`${styles.quantity_price} ${styles[rowClassType]} ${styles.noselect}`}
		>
			<span
				className={styles.quantity}
				style={
					row.quantity !== 0
						? {
								width: calcVolumeFill(row.quantity)
						  }
						: { width: 0 + "%" }
				}
			>
				<span className={styles.quantity_text}>
					{row.quantity !== 0 ? row.quantity : 0}
				</span>
			</span>
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
