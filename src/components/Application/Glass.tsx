import React, { useEffect, useState } from "react"

import { Row, Trade, Tx } from "../../api/data"
import Position from "./Position"
import HotSettings from "./HotSettings"
import Trades from "./Trades"
import TxpoolBlock from "./TxpoolBlock"
import QuantityPrice from "./QuantityPrice"
import styles from "../../styles/Glass.module.css"

const Glass = ({ depth, trade, txpool, maxVolumeFill }) => {
	const [positionState, setPositionState] = useState<number>(null)

	const selectPrice = (event) => {
		event.preventDefault()
		
		const chosenPrice = event.target.textContent

		if (positionState === chosenPrice) {
			setPositionState(null)
			// event.target.style.background = "gray"
		} else if (positionState) {
			console.log("First close current position")
			return
		} else {
			setPositionState(chosenPrice)
			// event.target.style.background = "red"
			// console.log(chosenPrice)
		}
	}

	return (
		<div className={styles.wrapper}>
			<ul className={styles.glass}>
				{depth.map((row: Row) => {
					return (
						<li key={row.price}>
							<Trades trade={trade} rowPrice={row.price} />
							<QuantityPrice
								row={row}
								selectPrice={(e) => {
									selectPrice(e)
								}}
							/>
							<Position positionState={positionState} row={row} />
						</li>
					)
				})}
			</ul>
			<TxpoolBlock txpool={txpool} />
			<HotSettings />
		</div>
	)
}

export default Glass
