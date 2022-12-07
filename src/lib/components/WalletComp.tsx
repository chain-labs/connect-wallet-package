import React from 'react'
import Box from 'src/components/Box'
import ConnectedComp from './ConnectedComp'
import Wallet from './Wallet'

const WalletComp = () => {
    const Button = ():JSX.Element => {
        return <button onClick={() => console.log('button clicked')}>Click</button>;
      };
  return (
   <Box>
    <Wallet AddressBox={{display:"flex"}} ConnectButtonComp={Button}
    StyleNetworkButton={{display:"flex",backgroundColor:"purple",color:"white",borderRadius:"12px",border:"none",cursor:"pointer",marginRight:"12px",padding:"12px"}}
    StyleAddressButton={{backgroundColor:"purple",color:"white",borderRadius:"12px",border:"none",cursor:"pointer"}}
    />
   </Box>
  )
}

export default WalletComp