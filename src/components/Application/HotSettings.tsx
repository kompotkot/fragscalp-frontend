import { Row, Trade, Tx } from "../../api/data"
import LongButton from "../LongButton"
import LongInput from "../LongInput"
import LongSelect from "../LongSelect"
import ShortButton from "../ShortButton"
import ShortInput from "../ShortInput"
import styles from "../../styles/HotSettings.module.css"

const HotSettings = () => {
	let glassFillQuantity = 5
	let tradesFillQuantity = 3
	let txpoolFillQuantity = 12
	return (
		<span className={styles.settings}>
			<div className={styles.block_wrapper}>
				<LongSelect name="ticker">
					<option value="bnbusdt">BNBUSDT</option>
					<option value="ethusdt">ETHUSDT</option>
				</LongSelect>
			</div>
			<br />
			<div>
				<div className={styles.block_wrapper}>
					<ShortInput value={glassFillQuantity} />
					<label className={styles.label_hint}>
						glass fill quantity
					</label>
				</div>
				<div className={styles.block_wrapper}>
					<ShortInput value={tradesFillQuantity} />
					<label className={styles.label_hint}>
						trades fill quantity
					</label>
				</div>
				<div className={styles.block_wrapper}>
					<ShortInput value={txpoolFillQuantity} />
					<label className={styles.label_hint}>
						txpool fill quantity
					</label>
				</div>
			</div>
			<br />
			<div>
				<div className={styles.block_wrapper}>
					<label className={styles.label_string}>
						open price:
						<label className={styles.label_highlighted}>{0}</label>
					</label>
				</div>
				<div className={styles.block_wrapper}>
					<label className={styles.label_string}>
						available lots:
						<label className={styles.label_highlighted}>{0}</label>
					</label>
				</div>
				<div className={styles.block_wrapper}>
					<LongInput id={styles.deal_input} placeholder="0 USDT" />
				</div>
				<div className={styles.block_wrapper}>
					<ShortButton id={styles.btn_buy}>BUY</ShortButton>
					<ShortButton id={styles.btn_sell}>SELL</ShortButton>
				</div>
				<div className={styles.block_wrapper}>
					<LongButton id={styles.btn_close}>CLOSE ALL</LongButton>
				</div>
			</div>
		</span>
	)
}

export default HotSettings
