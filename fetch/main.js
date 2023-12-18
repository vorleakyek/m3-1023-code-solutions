async function getArray() {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok === false) {
      throw new Error(`server status code: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error("Error:", error);
  }
}

getArray();
