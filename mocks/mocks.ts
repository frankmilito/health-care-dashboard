import { setupWorker } from "msw/browser";
import userHandler from "./user-handler";

export const worker = setupWorker(...userHandler);
