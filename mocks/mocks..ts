import { setupWorker } from "msw/browser";
import userHandler from "./user-handler";
const worker = setupWorker(...userHandler);

export default worker;
