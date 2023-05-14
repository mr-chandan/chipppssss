import Cartnav from "@/components/Cartnav"
import Ordersdis from "@/components/ordersdis"
import Styles from "@/styles/orderdis.module.css"

const orders = () => {
    return (
        <div className={Styles.main}>
            <Cartnav />
            <Ordersdis />
        </div>

    )
}

export default orders