import React, { useEffect, useState } from "react"
import Head from "next/head"

import styles from "../styles/Layout.module.css"

const Layout = ({ children, title = "fragscalp" }) => {
	const [token, setToken] = useState<string>("")

	useEffect(() => {
		const tokenId = localStorage.getItem("token")
		if (tokenId) {
			setToken(tokenId)
		}
	}, [])

	return (
		<div className={styles.div_html}>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="https://s3.amazonaws.com/static.simiotics.com/moonstream/assets/favicon.png" />
				<meta
					name="description"
					content="High-frequency trading tool for traders"
				/>
			</Head>

			<header className={styles.div_header}>
				<div className={styles.div_logo}>
					<h1>
						<a href="/">TRADING</a>
					</h1>
				</div>
				<ul className={styles.ul_navigation}>
					{token ? (
						<li>
							<a href="/account">Account</a>
						</li>
					) : (
						<li>
							<a href="/login">Login</a>
						</li>
					)}
					<li>
						<a href="/application">Application</a>
					</li>
				</ul>
			</header>

			<main className={styles.div_main}>{children}</main>

			<footer className={styles.div_footer}>© 2021 TRADING</footer>
		</div>
	)
}

export default Layout
