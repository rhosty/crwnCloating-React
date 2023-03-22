import { ReactComponent as TrashBin } from '../../assets/bin.svg'
import { useContext, useState } from 'react'
import { CartInfoContext } from '../../contexts/cart.info.ctx'
import './bin.style.scss'

const Bin = () => {

    const {cartInfo, setCartInfo} = useContext(CartInfoContext)

    const removeHandler = (event) => {
      console.log(cartInfo)
      }
    return(
        <TrashBin value={cartInfo.name} onClick={removeHandler} className='bin' />
    )
}

export default Bin