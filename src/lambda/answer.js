import response from "./util/response";

const ncco = [
  {
    action: "talk",
    text: "You are listening to a Call made with Voice API"
  }
];

export async function handler() {
  return response({
    body: ncco
  });
}
