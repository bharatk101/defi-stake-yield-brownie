import { useEthers } from "@usedapp/core"
import helperConfig from "../helper-config.json"
import networkMapping from "../chain-info/deployments/map.json"
import { constants } from "ethers"
import brownieConfig from "../brownie-congif.json"

export const Main = () => {

    const { chainId } = useEthers()
    const networkName  = chainId ? helperConfig[chainId] : "dev"
    let stringChainId = String(chainId)
    const dappTokenAddress = chainId ? networkMapping[stringChainId]["DappToken"][0] : constants.AddressZero
    const webTokenAddress = chainId ?  brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const fauTokenAddress = chainId ? brownieConfig["networks"][networkName]["fau_token"] : constants.AddressZero

    return (<div>HI!</div>)
}