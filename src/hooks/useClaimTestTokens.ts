import { useEthers, Mainnet } from "@usedapp/core";
import { useCallback } from "react";
import { useContracts } from "./useContracts";
import { toast } from "react-toastify";

export const useClaimTestTokens = () => {
  const { CallContract } = useContracts();
  const { switchNetwork, account } = useEthers();

  return useCallback(
    async () => {
      if (!CallContract) return;
      await switchNetwork(Mainnet.chainId);
      try {
        const signature = "0x3939cdf081cf4e56dda4109ba69b7192978ece21c75d2c2aaa2d5bbac0f1537828b639a9f3d2db8b4101ae38267954130ba7911b4f2f8696ae0bec574e1c3c601b";
        const txPromise = await CallContract.claimToken(
          "1",
          "0",
          signature
        );
        const tx = await txPromise.wait();
        toast.success('Claimed!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
        });
        return tx;
      } catch (error: any) {
        const errorMessage =
          error?.error?.message ||
          error?.message ||
          "Check console logs for error";
        console.error(error);
        console.error(errorMessage);
        toast.error('Err! See console', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "colored",
        });
      }
    },
    [CallContract, switchNetwork, account]
  );
};