import cron from "node-cron";

import supabase from "../config/database";
import API from "../API";

async function task() {
  const { data } = await supabase.from("registers").select().eq("status", true);
  if (data) {
    Promise.allSettled(
      data.map((register) => {
        console.log(register.url);
      })
    );
  }
  console.log("Run task per three minute!", data);
}

cron.schedule("*/3 * * * *", task);
