import client from "#lib/client.ts";
import type { MiniBio } from "./mini-bio.model";

export const getMiniBio = async (): Promise<MiniBio> => {
  const miniBio = await client.getContent<MiniBio>({
    contentType: "MiniBio",
  });
  return miniBio;
};
