import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/Trades.module.css"

const Trades = ({ trade, rowPrice }) => {
	return (
		<span className={styles.trades}>
			{trade.price === rowPrice ? trade.quantity : ""}
		</span>
	)
}

export default Trades
