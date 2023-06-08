import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const api = "https://dummyapi.io/data/v1/user";

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "app-id": "6481b9d0850b8312cb83fddf",
      },
    });
    const result = await response.json();
    result.data.map((user) =>
      console.log(`User: ${user.firstName} ${user.lastName}`)
    );
  } catch {
    (error) => console.log(error);
  }
};

fetchData(api);
