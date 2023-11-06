// importing error class
import { HttpError } from "./customError.js";

// api calling from jsonplaceholder
export async function callFromApi(requestedData) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/${requestedData}`
    );
    // const data = await fetch(`https://jsonplaceholder.typicode.com/help`);
    if (!data.ok) throw new HttpError("Something is Wrong with API");
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    // display custom error
    error.displayError();
  }
}
