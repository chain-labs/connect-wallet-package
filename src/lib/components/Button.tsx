import React, { useEffect } from 'react'
import { ConnectButton, getDefaultWallets, RainbowKitProvider, useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import Box, { BoxProps } from 'src/components/Box';
import theme from 'src/styleguide/theme';
// import { useAccount } from 'wagmi';
import { chain, configureChains, createClient, useAccount, useNetwork, useProvider, useSigner, WagmiConfig } from 'wagmi';
import { props } from 'src/App';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { ALCHEMY_API_KEY } from 'src/constants';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({  apiKey: ALCHEMY_API_KEY }), publicProvider()]
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

interface buttonProps extends props   {
	ConnectButtonComp?: any;
  WrongNetworkComp?:any;
  AddressBox?: any;
  StyleNetworkButton?:any;
  StyleIconBox?:any,
  StyleIconImage?:any,
  StyleAddressButton?:any
} 

const Button = ({ConnectButtonComp, WrongNetworkComp, AddressBox, StyleNetworkButton, StyleIconBox, StyleIconImage,StyleAddressButton}:buttonProps) : JSX.Element=> {
  const { openConnectModal } = useConnectModal()
  const { openChainModal } = useChainModal()
  const { openAccountModal} = useAccountModal()
  const account = useAccount()

  useEffect(() => {
   console.log(account.address)
  }, [account])
  
  
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Button
          AddressBox={AddressBox} 
          ConnectButtonComp={ConnectButtonComp} 
          WrongNetworkComp={WrongNetworkComp} 
          StyleNetworkButton={StyleNetworkButton} 
          StyleIconBox={StyleIconBox}
          StyleIconImage={StyleIconImage}
          StyleAddressButton={StyleAddressButton} />    
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Button;
Button.displayName = 'Button.Custom';
