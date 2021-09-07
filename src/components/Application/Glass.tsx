import { Row, Trade, Tx } from "../../api/data"
import Position from "./Position"
import HotSettings from "./HotSettings"
import Trades from "./Trades"
import TxpoolBlock from "./TxpoolBlock"
import QuantityPrice from "./QuantityPrice"
import styles from "../../styles/Glass.module.css"

const Glass = ({ depth, trade, txpool, maxVolumeFill }) => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.glass}>
				{depth.map((row: Row) => {
					return (
						<li key={row.price}>
							<Trades trade={trade} rowPrice={row.price} />
							<QuantityPrice key={row.price} row={row} />
							<Position />
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
