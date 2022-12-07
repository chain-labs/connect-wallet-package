import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Wallet from './lib/components/Wallet';
import { useEffect } from 'react';
import { Button } from './lib';
import WalletComp from './lib/components/WalletComp';
import ButtonComp from './lib/components/ButtonComp';
import Box from './components/Box';
import { ALCHEMY_API_KEY } from 'src/constants';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({  apiKey: ALCHEMY_API_KEY}), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
});

export interface props   {
	ConnectButtonComp?: any;
  WrongNetworkComp?:any;
  AddressBox?: any;
  StyleNetworkButton?:any;
  StyleIconBox?:any,
  StyleIconImage?:any,
  StyleAddressButton?:any
} 

const App = () => {

  return (
  //   <WagmiConfig client={wagmiClient}>
  //   <RainbowKitProvider chains={chains}>
  //     {/* <Wallet AddressBox={{display:"flex"}} ConnectButtonComp={Button}
  //     StyleNetworkButton={{display:"flex",backgroundColor:"purple",color:"white",borderRadius:"12px",border:"none",cursor:"pointer",marginRight:"12px",padding:"12px"}}
  //     StyleAddressButton={{backgroundColor:"purple",color:"white",borderRadius:"12px",border:"none",cursor:"pointer"}}
  //     /> */}
  //     {/* <Wallet 
  //     AddressBox={AddressBox} 
  //     ConnectButtonComp={ConnectButtonComp} 
  //     WrongNetworkComp={WrongNetworkComp} 
  //     StyleNetworkButton={StyleNetworkButton} 
  //     StyleIconBox={StyleIconBox}
  //     StyleIconImage={StyleIconImage}
  //     StyleAddressButton={StyleAddressButton} /> */}
  //     <ButtonComp/>
  //   </RainbowKitProvider>
  // </WagmiConfig>
  <Box>
    <Button AddressBox={{display:"flex"}} ConnectButtonComp={Button}
          StyleNetworkButton={{display:"flex",backgroundColor:"purple",color:"white",borderRadius:"12px",border:"none",cursor:"pointer",marginRight:"12px",padding:"12px"}}
        StyleAddressButton={{backgroundColor:"purple",color:"white",borderRadius:"12px",border:"none",cursor:"pointer"}}
        />  
  </Box>
  );
}

export default App;
