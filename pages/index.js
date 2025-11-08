import Head from "next/head"
import styles from "../styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"

const supportedChains = ["31337", "11155111"]

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery DApp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader></ManualHeader> */}
            <Header></Header>
            <LotteryEntrance />
        </div>
    )
}
