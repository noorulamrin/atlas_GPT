import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from "../controllers/chat-controller.js";
import { chatCompletionValidator, validate } from "../utils/validator.js";

const chatRoutes = Router();
chatRoutes.post(
  "/new",
  //@ts-ignore
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;
