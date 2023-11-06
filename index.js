// importing functions
import { callFromApi } from "./js/callFromApi.js";

// Adding eventlistner to all buttons
let elements = document.querySelectorAll(".bttn");
elements.forEach((element) => {
  element.addEventListener("click", handleRequest);
});

// showcase Data in console
function showData(responseData) {
  if (responseData === undefined) return;
  responseData.forEach((item) => {
    console.log(item);
  });
}

// handle coming request from user
async function handleRequest(event) {
  let requestedData = event.target.innerText;
  requestedData = requestedData.toLowerCase();
  // getting responseData through API call
  let responseData = await callFromApi(requestedData);
  showData(responseData);
}
