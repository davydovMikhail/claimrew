import { JsonRpcProvider } from '@ethersproject/providers';
import { useMemo } from 'react';
import { useEthers } from "@usedapp/core"
import { Call__factory } from '../typechain';


export const useContracts = () => {
    const { library } = useEthers();
    
    const CallContract = useMemo(() => {
        if (library) {
            return Call__factory.connect(process.env.REACT_APP_CALL_CONTRACT!, (library as JsonRpcProvider)?.getSigner());
        }
    }, [library]);

    return {
        CallContract
    }
}