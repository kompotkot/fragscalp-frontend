import React, { useState } from "react"

import LongButton from "../LongButton"
import LongInput from "../LongInput"
import LongSelect from "../LongSelect"
import ShortButton from "../ShortButton"
import ShortInput from "../ShortInput"
import styles from "../../styles/HotSettings.module.css"

const HotSettings = () => {
	// const [tickerState, setTickerState] = useState<string>("bnbusdt")

	const [glassFillQuantityState, setGlassFillQuantityState] =
		useState<number>(5)
	const [tradesFillQuantityState, setTradesFillQuantityState] =
		useState<number>(3)
	const [txpoolFillQuantityState, setTxpoolFillQuantityState] =
		useState<number>(12)

	return (
		<span className={styles.settings}>
			<div className={styles.block_wrapper}>
				<LongSelect name="ticker">
					<option value="bnbusdt">BNBUSDT</option>
				</LongSelect>
			</div>
			<br />
			<div className={styles.settings_wrapper}>
				<div className={styles.block_wrapper}>
					<ShortInput
						value={glassFillQuantityState}
						onChange={(e) =>
							setGlassFillQuantityState(parseInt(e.target.value))
						}
					/>
					<label className={styles.label_hint}>
						glass fill quantity
					</label>
				</div>
				<div className={styles.block_wrapper}>
					<ShortInput
						value={tradesFillQuantityState}
						onChange={(e) =>
							setTradesFillQuantityState(parseInt(e.target.value))
						}
					/>
					<label className={styles.label_hint}>
						trades fill quantity
					</label>
				</div>
				<div className={styles.block_wrapper}>
					<ShortInput
						value={txpoolFillQuantityState}
						onChange={(e) =>
							setTxpoolFillQuantityState(parseInt(e.target.value))
						}
					/>
					<label className={styles.label_hint}>
						txpool fill quantity
					</label>
				</div>
			</div>
			<br />
			<div className={styles.position_wrapper}>
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
