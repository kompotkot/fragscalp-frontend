import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

import LongButton from "../components/LongButton"
import Layout from "../components/Layout"
import LongInput from "../components/LongInput"

import styles from "../styles/Account.module.css"

const Account = () => {
	const router = useRouter() // Redirect to another page

	const [token, setToken] = useState<string>("")

	useEffect(() => {
		const tokenId = localStorage.getItem("token")
		if (tokenId) {
			setToken(tokenId)
		}
	}, [])

	const logoutHandler = async (event: any) => {
		event.preventDefault()

		// const r = await fetch("http://192.168.1.58:7474/token", {
		// 	method: "DELETE",
		// 	headers: { Authorization: `Bearer ${token}` }
		// })
		// console.log(r.status)
		// if (r.status !== 200) {
		// 	console.log("Failed logout")
		// } else {
		// 	localStorage.removeItem("token")
		// 	setToken("")
		// 	router.push("/")
		// }
		localStorage.removeItem("token")
		setToken("")
		router.push("/")
	}

	return (
		<Layout>
			<div className={styles.div_account}>
				<div className={styles.div_block}>
					<h2>Binance API keys</h2>
					<LongInput placeholder="Binance API key" />
					<LongInput
						placeholder="Binance secret key"
						type="password"
					/>
				</div>
				<br />
				<div className={styles.div_block}>
					<h2>Password</h2>
					<LongInput placeholder="Old password" />
					<LongInput placeholder="New password" />
					<LongInput placeholder="New password confirm" />
					<LongButton>CHANGE PASSWORD</LongButton>
				</div>
				<br />
				<div>
					<LongButton id={styles.btn_special} onClick={logoutHandler}>
						LOG OUT
					</LongButton>
				</div>
			</div>
		</Layout>
	)
}

export default Account
