import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/Trades.module.css"

const Trades = ({ trades, rowPrice, tradesFillQuantity }) => {
	const generateTradesScreen = () => {
		let tradesScreen = []
		for (let i = 0; i < trades.length; i++) {
			const tradeOpacity = () => {
				const tempOpacity = trades[i].quantity / tradesFillQuantity
				if (tempOpacity < 0.2) {
					return 0.2
				}
				return tempOpacity
			}

			tradesScreen.push(
				<span
					className={styles.trade}
					style={
						trades[i].price === rowPrice
							? trades[i].isBuyerMarketMaker
								? {
										backgroundColor: "#63171b",
										opacity: tradeOpacity()
								  }
								: {
										backgroundColor: "#1d4044",
										opacity: tradeOpacity()
								  }
							: {}
					}
				>
					{trades[i].price === rowPrice ? trades[i].quantity : ""}
				</span>
			)
		}

		return tradesScreen
	}

	return <span className={styles.trades}>{generateTradesScreen()}</span>
}

export default Trades
