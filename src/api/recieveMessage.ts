import { axios } from "./axios";
import { INotification } from "../types/Notification";

export const recieveMessage = async (
  id: string,
  apiToken: string,
  chatId: string
): Promise<INotification | undefined> => {
  try {
    const notification = await recieveNotification(id, apiToken);
    if (notification) {
      try {
        const deleteResult = await deleteNotification(
          id,
          apiToken,
          notification.receiptId
        );
        if (
          deleteResult &&
          notification.body.typeWebhook === "outgoingMessageReceived" &&
          notification.body.senderData.chatId === chatId
        ) {
          return notification;
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const recieveNotification = async (
  id: string,
  apiToken: string
): Promise<INotification | null> => {
  const res = await axios({
    url: `waInstance${id}/receiveNotification/${apiToken}`,
    method: "GET",
    withCredentials: false,
  });
  return res.data;
};

const deleteNotification = async (
  id: string,
  apiToken: string,
  notificationId: number
): Promise<boolean> => {
  const res = await axios({
    method: "delete",
    url: `/waInstance${id}/deleteNotification/${apiToken}/${notificationId}`,
    withCredentials: false,
  });
  return res.data.result;
};
