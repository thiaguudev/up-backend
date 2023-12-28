import cron from "node-cron";
import async from "async";

import service from "../services/registers";

import env from "../config";
import API from "../API";

async function task() {
  const registers = await service.getAll();

  if (registers) {
    await async.eachLimit(
      registers.map((page) => page.url),
      env.MAX_CONCURRENCY,
      async function (url) {
        try {
          await API.head(url);
          console.log("request", url);
        } catch (error) {
          console.log(error);
        }
      }
    );
  } else {
  }
}

cron.schedule("*/1 * * * *", task);
