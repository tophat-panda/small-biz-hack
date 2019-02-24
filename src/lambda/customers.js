import response from "./util/response";

export async function handler() {
  return response({
    body: { message: "Customers would be returned here" }
  });
}
