import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

import LongButton from "../components/LongButton"
import Layout from "../components/Layout"
import LongInput from "../components/LongInput"
import styles from "../styles/Login.module.css"

const Login = () => {
	const router = useRouter() // Redirect to another page

	const [login, setLogin] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const [token, setToken] = useState<string>("")

	useEffect(() => {
		const tokenId = localStorage.getItem("token")
		if (tokenId) {
			setToken(tokenId)
		}
	}, [])

	const loginHandler = async (event: any) => {
		event.preventDefault()

		// const APPLICATION_ID = "8a682f5a-c090-49b3-b53e-a289df9f4a26"
		// const data = new FormData()
		// data.append("username", login)
		// data.append("password", password)
		// data.append("application_id", APPLICATION_ID)
		// const r = await fetch("https://auth.bugout.dev/applications", {
		// 	method: "POST",
		// 	body: data
		// })
		// console.log(r.status)
		// if (r.status !== 200) {
		// 	console.log("Moonstream log in failed")
		// } else {
		// 	const response = await r.json()
		// 	localStorage.setItem("token", response.id)
		// 	setToken(response.id)
		// 	router.push("/account")
		// }
		localStorage.setItem("token", login + password)
		router.push("/application")
	}

	return (
		<Layout>
			<div className={styles.div_login}>
				<h2>Log in</h2>
				<LongInput
					placeholder="login"
					onChange={(e) => setLogin(e.target.value)}
				/>
				<LongInput
					placeholder="password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<LongButton onClick={loginHandler}>LOG IN</LongButton>
			</div>
		</Layout>
	)
}

export default Login
