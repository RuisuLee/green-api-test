import axios from "axios";
import { ISendMessageParams } from "../types/SendMessage";

export const sendMessage = async (
  data: ISendMessageParams
): Promise<string> => {
  const res = await axios({
    method: "post",
    url: `/waInstance${data.id}/sendMessage/${data.apiToken}`,
    data: {
      chatId: data.chatId,
      message: data.message,
    },
  });
  console.log(res);
  return "";
};
