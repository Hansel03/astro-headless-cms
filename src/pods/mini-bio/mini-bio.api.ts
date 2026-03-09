import client from "@lib/client.ts";
import type { MiniBio } from "./mini-bio.model";

export /**
 * funcion que obtiene la mini biografia del autor
 *
 * @return {*}  {Promise<MiniBio>}
 */
const getMiniBio = async (): Promise<MiniBio> => {
  const miniBio = await client.getContent<MiniBio>({
    contentType: "MiniBio",
  });
  return miniBio;
};
