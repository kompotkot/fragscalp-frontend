import Head from "next/head"
import styles from "../styles/Layout.module.css"

const Layout = ({ children, title = "fragscalp" }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.svg" />
				<meta
					name="description"
					content="High-frequency trading tool for traders"
				/>
			</Head>

			<header className={styles.header}>FRAGSCALP LOGIN APPLICATION</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>© 2021 FRAGSCALP</footer>
		</div>
	)
}

export default Layout
