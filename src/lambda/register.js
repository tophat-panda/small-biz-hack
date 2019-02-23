import response from "./util/response"

export async function handler(event, context ) {
    return response({body:7})
}