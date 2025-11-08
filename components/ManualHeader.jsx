import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const {
        isWeb3Enabled,
        chainId,
        enableWeb3,
        account,
        Moralis,
        deactivateWeb3,
        isWeb3EnableLoading,
    } = useMoralis()
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined" && window.localStorage.getItem("connected")) {
            enableWeb3()
        }
        console.log("Web3 Enabled:", isWeb3Enabled)
    }, [isWeb3Enabled])
    //no dependancy array: re renders any time anything changes
    //[] blank dependency array: renders once the page refreshes

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account === null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account detected")
            }
        })
    }, [])
    return (
        <div>
            <h1>Welcome to the Smart Contract Lottery</h1>
            {account ? (
                <p>
                    Connected to {account.slice(0, 6)}...{account.slice(-4)}
                </p>
            ) : (
                <button
                    type=""
                    onClick={async () => {
                        await enableWeb3()
                        window.localStorage.setItem("connected", "injected")
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect Wallet
                </button>
            )}

            {/* {isWeb3Enabled ? (
                <p>Connected to chain {chainId}</p>
            ) : (
                <p>Please connect your wallet</p>
            )} */}
        </div>
    )
}
