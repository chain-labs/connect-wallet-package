import React, { useEffect, useState } from 'react'
import { useAccount, useNetwork, useProvider, useSigner } from 'wagmi';

const useWagmi = () => {
    const { chain } = useNetwork()
    const provider = useProvider()
    const  signer = useSigner()
    const account = useAccount()
    const [contract,setContract]=useState({})
    const artifactObject = {
        COLLECTION:"Collection",
        COLLECTION_A:"CollectionA" 
    }
  
    useEffect(() => {
		setContract({chain:chain,signer:signer,provider:provider,account:account,artifact:artifactObject.COLLECTION})
	}, [provider,account])


    return contract;
  
}

export default useWagmi;

