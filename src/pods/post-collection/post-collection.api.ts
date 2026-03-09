import client from "@lib/client.ts";
import type { Post } from "./post-collection.model";

export /**
 * funcion que obtiene todos los posts ordenados por fecha de manera descendente, limitando la cantidad a 60
 *
 * @return {*}  {Promise<Post[]>}
 */
const getAllPost = async (): Promise<Post[]> => {
  const posts = await client.getContentList<Post>({
    contentType: "Post",
    sort: { "fields.date": "desc" },
    pagination: { take: 60 },
  });
  return posts;
};
