/* eslint-disable no-async-promise-executor */
// import Collection from "@discordjs/collection";
import ScarlexClientOptions from "../types/ScarlexClientOptions";

 function checkClientOptions(options: ScarlexClientOptions) {
     if (
         typeof options.serverPort !== null && typeof options.serverPort === "number"
     ) throw new TypeError(`[ScarlexClientOptions] : "serverPort" must be a number`);
     if (
         typeof options.baseURL !== "string" || options.baseURL.length === 0
     ) throw new TypeError(`[ScarlexClientOptions] : "baseURL" must be a string`);
     if (
         typeof options.webTitle !== "string"
     ) throw new TypeError(`[ScarlexClientOptions] : "webTitle" must be a string`);
 }