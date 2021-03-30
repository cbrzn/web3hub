import { providers } from "ethers";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import { helpers } from "content-hash";

interface CheckContentResponse {
  valid: boolean;
  message?: string;
}

export const checkContentIsValid = async (
  pointer: string,
  location: string
): Promise<CheckContentResponse> => {
  const provider = new providers.JsonRpcProvider(process.env.RPC_NODE);

  const ens = new ENS({
    provider,
    ensAddress: getEnsAddress("1"),
  });

  const { value: content } = await ens.name(pointer).getContent();

  if (!content) {
    return {
      message: "ENS pointer is not registered",
      valid: false,
    };
  }

  const hash = content.split("/").slice(-1)[0];
  const decodedContent = helpers.cidV0ToV1Base32(hash);

  if (location.includes(decodedContent)) {
    return { valid: true };
  }

  return {
    valid: false,
    message: "ENS pointer is not pointing to given IPFS hash",
  };
};
