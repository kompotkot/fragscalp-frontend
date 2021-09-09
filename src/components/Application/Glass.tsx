import React, { useEffect, useState } from "react"

import { Row, Trade, Tx } from "../../api/data"
import Position from "./Position"
import HotSettings from "./HotSettings"
import Trades from "./Trades"
import TxpoolBlock from "./TxpoolBlock"
import QuantityPrice from "./QuantityPrice"
import styles from "../../styles/Glass.module.css"

const Glass = ({ depth, trades, txpool }) => {
	const [position, setPosition] = useState<Row>(undefined)

	const [maxVolumeFill, setMaxVolumeFill] = useState<number>(5) // Store user defined max filled of volume bar
	const [tradesFillQuantity, setTradesFillQuantity] = useState<number>(3)
	const [txpoolFillQuantity, setTxpoolFillQuantity] = useState<number>(12)

	const getRowClassType = (row) => {
		let rowClassType
		if (row.position === "ask_hard") {
			rowClassType = "ask_row_hard"
		} else if (row.position === "bid_hard") {
			rowClassType = "bid_row_hard"
		}
		return rowClassType
	}

	const selectPrice = (event, row: Row) => {
		/*
		Set position in the glass.
		*/
		event.preventDefault()

		if (position?.price === row.price) {
			setPosition(undefined)
		} else if (position) {
			console.log("First close current position")
			return
		} else {
			setPosition(row)
		}
	}

	return (
		<div className={styles.wrapper}>
			<ul className={styles.glass}>
				{depth.map((row: Row) => {
					return (
						<li className={`${styles[getRowClassType(row)]}`}>
							<Trades
								trades={trades}
								rowPrice={row.price}
								tradesFillQuantity={tradesFillQuantity}
							/>
							<QuantityPrice
								row={row}
								selectPrice={(e) => {
									selectPrice(e, row)
								}}
								maxVolumeFill={maxVolumeFill}
							/>
							<Position position={position} row={row} />
						</li>
					)
				})}
			</ul>
			<TxpoolBlock txpool={txpool} />
			<HotSettings
				maxVolumeFill={maxVolumeFill}
				setMaxVolumeFill={setMaxVolumeFill}
				tradesFillQuantity={tradesFillQuantity}
				setTradesFillQuantity={setTradesFillQuantity}
				txpoolFillQuantity={txpoolFillQuantity}
				setTxpoolFillQuantity={setTxpoolFillQuantity}
			/>
		</div>
	)
}

export default Glass
