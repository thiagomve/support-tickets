import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js"

async function listener(request, response) {
    await jsonHandler(request, response)

    console.log("teste")
}

http.createServer(listener).listen(3333);