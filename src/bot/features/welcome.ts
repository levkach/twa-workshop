import { Composer, InlineKeyboard } from "grammy";
import type { Context } from "#root/bot/context.js";
import { logHandle } from "#root/bot/helpers/logging.js";

const composer = new Composer<Context>();

const feature = composer.chatType("private");

const frontendUrl = process.env.FRONTEND_URL;
const urlCreator = (endpoint: string) => frontendUrl + endpoint;

feature.command("start", logHandle("command-start"), async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .webApp("Main page", urlCreator("/"))
    .webApp("Another page", urlCreator("/another-page"));

  await ctx.reply(ctx.t("welcome"), { reply_markup: inlineKeyboard });
});

export { composer as welcomeFeature };
