import React, { useEffect } from 'react'
import { ConnectButton, useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import Box, { BoxProps } from 'src/components/Box';
import theme from 'src/styleguide/theme';
// import { useAccount } from 'wagmi';
import { useAccount, useNetwork, useProvider, useSigner } from 'wagmi';
import { props } from 'src/App';

interface walletProps extends props   {
	ConnectButtonComp?: any;
  WrongNetworkComp?:any;
  AddressBox?: any;
  StyleNetworkButton?:any;
  StyleIconBox?:any,
  StyleIconImage?:any,
  StyleAddressButton?:any
} 

const Wallet = ({ConnectButtonComp, WrongNetworkComp, AddressBox, StyleNetworkButton, StyleIconBox, StyleIconImage,StyleAddressButton}:walletProps) : JSX.Element=> {
  const { openConnectModal } = useConnectModal()
  const { openChainModal } = useChainModal()
  const { openAccountModal} = useAccountModal()
  const account = useAccount()

  useEffect(() => {
   console.log(account.address)
  }, [account])
  
  
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        mounted,
      }) => {
        const ready = mounted;
        const connected =
          ready &&
          account &&
          chain 
    

        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <Box
                    onClick={openConnectModal}
                    >
                    <ConnectButtonComp/>
                  </Box>
                );
              }
              

              if (chain.unsupported) {
                return (
                  <Box onClick={openChainModal} >
                    <WrongNetworkComp/>
                  </Box>
                );
              }

              return (
                <div style={AddressBox}>
                  <button
                    onClick={openChainModal}
                    style={StyleNetworkButton}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={StyleIconBox}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={StyleIconImage}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button" style={StyleAddressButton}>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    
  );
};

export default Wallet;
Wallet.displayName = 'Wallet.Custom';