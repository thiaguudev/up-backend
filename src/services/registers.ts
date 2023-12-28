import supabase from "../config/database";

export default class RegisterService {
  static async getAll() {
    const { data } = await supabase
      .from("registers")
      .select()
      .eq("status", true)
      .limit(200);
    return data;
  }
}
