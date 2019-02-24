import response from "./util/response";
import getDatabaseConnection from "./util/database";

async function list() {
  const { dbo, close } = await getDatabaseConnection();

  const customers = dbo.collection("customers");

  const customerRecords = await customers
    .find()
    .limit(10)
    .toArray();

  await close();

  return response({
    body: customerRecords
  });
}

async function create(jsonString) {
  console.log(jsonString);
  let first_name;
  let last_name;
  let email;
  let phone_number;
  try {
    const body = JSON.parse(jsonString);
    first_name = body.first_name;
    last_name = body.last_name;
    email = body.email;
    phone_number = body.phone_number;
  } catch (e) {
    console.log(e);
    return response({
      statusCode: 400,
      body: { message: "Bad request" }
    });
  }
  if (
    !first_name &&
    typeof first_name !== "string" &&
    !last_name &&
    typeof last_name !== "string" &&
    !email &&
    typeof email !== "string" &&
    !phone_number &&
    typeof phone_number !== "string"
  ) {
    return response({
      statusCode: 400,
      body: { message: "Bad data" }
    });
  }
  const { dbo, close } = await getDatabaseConnection();

  const customers = dbo.collection("customers");

  const { insertedId } = await customers.insertOne({
    first_name,
    last_name,
    email,
    phone_number
  });

  await close();

  return response({
    body: { id: insertedId }
  });
}

export async function handler(event) {
  switch (event.httpMethod) {
    case "GET":
      return list();
    case "POST":
      return create(event.body);
    default:
      return response({
        statusCode: 405,
        body: { message: "Method not implemented" }
      });
  }
}
