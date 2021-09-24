import { Row, Trade, Tx } from "../../api/data"
import styles from "../../styles/TxpoolBlock.module.css"

const TxpoolBlock = ({ txpool }) => {
	return (
		<div className={styles.txpool}>
			<div className={styles.top_empty_block}></div>
			<div className={styles.top_block}>4200</div>
			<div className={styles.bottom_block_e}></div>
			<div className={styles.bottom_block_1}>130</div>
			<div className={styles.bottom_block_e}></div>
			<div className={styles.bottom_block_1}>2820</div>
		</div>
	)
}

export default TxpoolBlock
