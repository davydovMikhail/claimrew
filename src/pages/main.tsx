import { useState, useEffect, useRef } from 'react'
import { useEthers } from "@usedapp/core";
import { useClaimTestTokens } from '../hooks/useClaimTestTokens';

const Main = () => {
    const { activateBrowserWallet, account } = useEthers();
    const claimHook = useClaimTestTokens();

    async function handleClaim() {
        await claimHook();
    }

    return (
        <>
            <div className="nude">
                <div className="wrapper">
                    <div className="main">
                        <div className="section section-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2">
                                        <button onClick={() => activateBrowserWallet()} type="button" className="btn btn-warning btn-lg">Connect Wallet</button>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={() => handleClaim()} type="button" className="btn btn-warning btn-lg">Claim Tokens</button>
                                    </div>
                                </div>
                                {account}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}

export default Main;