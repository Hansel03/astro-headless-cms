import { Resend } from "resend";
import { FROM_EMAIL, RESEND_API_KEY, TO_EMAIL } from "astro:env/server";
import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { addLike, getLikes } from "./repository";
import type { LikesResponse } from "./model";

const resend = new Resend(RESEND_API_KEY);

export const server = {
  addLike: defineAction<LikesResponse>({
    async handler(slug) {
      return { likes: await addLike(slug) };
    },
  }),

  getLikes: defineAction<LikesResponse>({
    async handler(slug) {
      return { likes: await getLikes(slug) };
    },
  }),

  sendSuncription: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email("Invalid email address"),
    }),
    handler: async (input) => {
      try {
        const { email } = input;
        await resend.emails.send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: "New subscription",
          html: `<p>New subscription from ${email}</p>`,
        });
        return { success: true, message: "Subscription successful" };
      } catch (error) {
        return { success: false, message: "Failed to send subscription email" };
      }
    },
  }),
};
