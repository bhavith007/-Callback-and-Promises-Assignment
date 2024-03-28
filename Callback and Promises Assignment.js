//1)
function doubleArray(arr, callback) {
  return arr.map(callback);
}

const arr = [1, 2, 3, 4, 5];
const doubled = doubleArray(arr, (num) => num * 2);
console.log(doubled);

//2)
function manipulateString(str) {
  const manipulatedStr = str.toUpperCase();
  return function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  };
}

const log = manipulateString("hello world");
log();

//3)
function ageInDays(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;
  return function logAge() {
    console.log(
      `The person's full name is ${fullName} and their age in days is ${ageInDays}.`
    );
  };
}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
const logAgeCallback = ageInDays(person);
logAgeCallback();

//4)
function getBookTitles(books, callback) {
  const titles = books.map((book) => book.title);
  const sortedTitles = titles.sort();
  callback(sortedTitles);
}

const books = [
  { title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  { title: "Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

getBookTitles(books, (titles) => {
  console.log("Titles in alphabetical order:", titles);
});

//5)
function greetWithPromise(name) {
  return new Promise((resolve, reject) => {
    if (typeof name !== "string") {
      reject(new Error("Name should be a string"));
    } else {
      resolve(`Hello, ${name}!`);
    }
  });
}

greetWithPromise("Mithun")
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((error) => {
    console.error(error);
  });

//6)
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

//7)
async function fetchCombinedData() {
  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();
    const combinedData = {
      todo: todoData,
      post: postData,
    };
    console.log(combinedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchCombinedData();

//8)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

//9)
fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
