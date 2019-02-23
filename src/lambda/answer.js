import response from "./util/response";

const ncco = [
  {
      action: "talk",
      text: "Thankyou for calling us, we're transfering you to one of our agents now."
    },
    {
      "action": "connect",
      "from": "448081649169",
      "endpoint": [
        {
          "type": "app",
          "user": "luke"
        }
      ]

    }
];

export async function handler() {
  return response({
    body: ncco
  });
}
