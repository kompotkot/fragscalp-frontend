export type Row = {
	position: string
	price: number
	quantity: number
}

export type Trade = {
	price: number
	quantity: number
	// tradeTime: string	// TODO: Do we need it?
	isBuyerMarketMaker: boolean
}

export type Tx = {
	hash: string
	quantity: number
	minedTime?: string
}

export const testDepth = [
	{
		position: "ask",
		price: 216.3,
		quantity: 0
	},
	{
		position: "ask",
		price: 216.2,
		quantity: 0.143
	},
	{
		position: "ask",
		price: 216.1,
		quantity: 0
	},
	{
		position: "ask_hard",
		price: 216,
		quantity: 0.143
	},
	{
		position: "ask",
		price: 215.9,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.8,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.7,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.6,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.5,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.4,
		quantity: 0
	},

	{
		position: "ask",
		price: 215.3,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.2,
		quantity: 0
	},
	{
		position: "ask",
		price: 215.1,
		quantity: 0.143
	},
	{
		position: "ask_hard",
		price: 215,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.9,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.8,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.7,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.6,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.5,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.4,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.3,
		quantity: 0
	},
	{
		position: "ask",
		price: 214.2,
		quantity: 0.143
	},
	{
		position: "ask",
		price: 214.1,
		quantity: 0
	},
	{
		position: "ask_hard",
		price: 214,
		quantity: 21.132
	},
	{
		position: "ask",
		price: 213.9,
		quantity: 0.1
	},
	{
		position: "ask",
		price: 213.8,
		quantity: 0.143
	},
	{
		position: "ask",
		price: 213.7,
		quantity: 0.143
	},
	{
		position: "ask",
		price: 213.6,
		quantity: 0
	},
	{
		position: "ask",
		price: 213.5,
		quantity: 21.132
	},
	{
		position: "ask",
		price: 213.4,
		quantity: 0.1
	},
	{
		position: "ask",
		price: 213.3,
		quantity: 3.12
	},
	{
		position: "mid",
		price: 213.2,
		quantity: 0
	},
	{
		position: "bid",
		price: 213.1,
		quantity: 0.2
	},
	{
		position: "bid_hard",
		price: 213,
		quantity: 0
	},
	{
		position: "bid",
		price: 212.9,
		quantity: 0
	},
	{
		position: "bid",
		price: 212.8,
		quantity: 2.31
	},
	{
		position: "bid",
		price: 212.7,
		quantity: 0.2
	},
	{
		position: "bid",
		price: 212.6,
		quantity: 0
	},
	{
		position: "bid",
		price: 212.5,
		quantity: 0
	},
	{
		position: "bid",
		price: 212.4,
		quantity: 2.31
	},
	{
		position: "bid",
		price: 212.3,
		quantity: 2.31
	},
	{
		position: "bid",
		price: 212.2,
		quantity: 0
	},
	{
		position: "bid",
		price: 212.1,
		quantity: 0
	},
	{
		position: "bid_hard",
		price: 212,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.9,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.8,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.7,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.6,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.5,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.4,
		quantity: 2.31
	},
	{
		position: "bid",
		price: 211.3,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.2,
		quantity: 0
	},
	{
		position: "bid",
		price: 211.1,
		quantity: 2.31
	},
	{
		position: "bid_hard",
		price: 210,
		quantity: 0
	},
	{
		position: "bid",
		price: 210.9,
		quantity: 0
	},
	{
		position: "bid",
		price: 210.8,
		quantity: 0
	},
	{
		position: "bid",
		price: 210.7,
		quantity: 0
	},
	{
		position: "bid",
		price: 210.6,
		quantity: 0
	},
	{
		position: "bid",
		price: 210.5,
		quantity: 2.31
	},
	{
		position: "bid",
		price: 210.4,
		quantity: 0
	}
]

export const testTrades = [
	{
		price: 214.3,
		quantity: 0.02,
		isBuyerMarketMaker: true
	},
	{
		price: 213.2,
		quantity: 20.02,
		isBuyerMarketMaker: false
	},
	{
		price: 213.1,
		quantity: 0.02,
		isBuyerMarketMaker: false
	},
	{
		price: 213,
		quantity: 0.5,
		isBuyerMarketMaker: true
	},
	{
		price: 211.9,
		quantity: 1.42,
		isBuyerMarketMaker: true
	}
]
