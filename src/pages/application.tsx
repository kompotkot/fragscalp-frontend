import React, { useEffect, useState } from "react"

import { Row, Trade, Tx, testDepth, testTrades } from "../api/data"
import Glass from "../components/Application/Glass"
import Layout from "../components/Layout"
import styles from "../styles/Application.module.css"

const Application = () => {
	const [token, setToken] = useState<string>("")

	// WebSocket definition
	let ws: WebSocket
	const [wsConnection, setWsConnection] = useState<WebSocket | null>(null)
	const [manualWsClose, setManualWsClose] = useState<"manual" | "auto">(
		"auto"
	)

	// WebSocket handlers
	const closeWebSocket = (event) => {
		event.preventDefault()

		console.log("Closing WebSocket connection...")
		setManualWsClose("manual") // WTF? It doesn't work
		wsConnection.close()
	}

	let closeHandler = () => {
		if (manualWsClose === "auto") {
			console.log("Reopening WebSocket connection...")
			// setTimeout(createWsConnection, 3000)
		}
	}

	function createWsConnection(url: string = "ws://192.168.1.58:7881"): void {
		/*
		Establish connection with stream by WebSocket.
		*/
		wsConnection?.removeEventListener("close", closeHandler) // Clean EventListener from previous connection
		wsConnection?.close()

		ws = new WebSocket(`${url}/ws`)
		ws.addEventListener("close", closeHandler)

		setWsConnection(ws)
	}

	const [depth, setDepth] = useState<Row[]>(testDepth) // Storing new fetched asks and bids for price stack
	const [trades, setTrades] = useState<Trade[]>(testTrades)
	const [txpool, setTxpool] = useState<any | Tx>(undefined)

	const tradesMaxLen = 25
	let tempTrades: Trade[] = []

	const pushTrade = (trade: Trade) => {
		let lenTempTrades = tempTrades.length

		if (lenTempTrades < tradesMaxLen) {
			tempTrades.push(trade)
			return
		} else if (lenTempTrades === tradesMaxLen) {
			tempTrades.shift()
			tempTrades.push(trade)
			setTrades(tempTrades)
			return
		} else {
			console.log("wtf")
			tempTrades = []
		}
	}

	useEffect(() => {
		const tokenId = localStorage.getItem("token")
		if (tokenId) {
			setToken(tokenId)
		}

		// Execute first connection with Exchange WebSocket
		createWsConnection()
	}, [])

	useEffect(() => {
		// Start processing asks and bids
		let messageHandler = (event) => {
			const rawData = JSON.parse(event.data)
			if (rawData.type === "depth") {
				const depth = rawData.data.map((row) => {
					return {
						position: row.position,
						price: row.price,
						quantity: row.quantity
					} as Row
				})
				// console.log(depth)
				setDepth(depth)
			} else if (rawData.type === "trade") {
				const trade = {
					price: rawData.data.price,
					quantity: rawData.data.quantity,
					isBuyerMarketMaker: rawData.data.isBuyerMarketMaker
				} as Trade
				// console.log(trades)
				pushTrade(trade)
			} else if (rawData.type === "txpool") {
				const txpool = rawData.data.map((tx) => {
					return {
						hash: tx.hash,
						quantity: tx.quantity,
						minedTime: tx.minedTime
					} as Tx
				})
				console.log(txpool)
				// setTxpool(txpool)
			}
		}

		wsConnection?.addEventListener("message", messageHandler)
		return () => {
			wsConnection?.removeEventListener("message", messageHandler)
		}
	}, [wsConnection])

	return (
		<Layout>
			<div>
				{token ? (
					<Glass
						depth={depth}
						trades={trades}
						txpool={txpool}
					></Glass>
				) : (
					<div className={styles.div_forbidden}>
						Please log in to see the glass.
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Application
