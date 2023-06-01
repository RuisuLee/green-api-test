import axios from "axios";
import { INotification } from "../types/Notification";

export const recieveMessage = async (
  id: string,
  apiToken: string
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
          notification.body.typeWebhook === "outgoingMessageReceived"
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
  });
  console.log(res.data);
  return res.data.result;
};
