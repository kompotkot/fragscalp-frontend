import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Layout from "../components/Layout"

export default function Home() {
	return <Layout>main</Layout>
}

export const getStaticProps = async (): Promise<any> => {
  // const res = fetch
  return {
    props: {

    }
  }
}
