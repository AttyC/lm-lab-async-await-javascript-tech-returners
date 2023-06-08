import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const api = "https://dummyapi.io/data/v1//tag";

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "app-id": "6481b9d0850b8312cb83fddf",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch {
    (error) => console.log(error);
  }
};

fetchData(api);
