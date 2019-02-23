import response from "./util/response";
import getDatabaseConnection from "./util/database";
import passwordHelpers from "./util/password-helpers";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return response({
      statusCode: 405,
      body: { message: "you must make a Post Request" }
    });
  }
  let username;
  let password;
  try {
    const body = JSON.parse(event.body);
    username = body.username;
    password = body.password;
  } catch (error) {
    console.log(error);
    if (error instanceof SyntaxError) {
      return response({
        statusCode: 400,
        body: { message: "Bad request" }
      });
    }
    return response({
      statusCode: 500,
      body: { message: "Unknown error" }
    });
  }
  //   const { dbo, close } = await getDatabaseConnection();

  //   const users = dbo.collection("users");

  const hash = await passwordHelpers.hash(password);

  //   await close();

  return response({ body: { username, hash } });
}
