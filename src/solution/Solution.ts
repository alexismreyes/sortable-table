/* - Developer: Marlon Alexis Manzano Reyes
- Development date: June 16, 2024
- Script Purpose: Create a react component which allows user to sort the content of one table based in a chosen property  */

import {
  Person,
  rockyObj,
  miroslavObj,
  donnyObj,
  mattObj,
  alexisObj,
} from "./People.ts";

//Step 3: Create an array using this objects
export const peopleArray: Person[] = [
  rockyObj,
  miroslavObj,
  donnyObj,
  mattObj,
  alexisObj,
];

//Step 4: Iterate through the array, add the current date
const currentDate: string = new Date().toLocaleString();
peopleArray.forEach((person) => (person.Date = currentDate));

//Step 5: Console.log the active records showing the name, date and favorite movie. Include code it no Active poeple found!

//Create array for active people
const activePeople: Person[] = peopleArray.filter(
  (person) => person.Status === "Active"
);

//log to console array for Active people
if (activePeople.length > 0) {
  activePeople.forEach((person) =>
    console.log(
      `Name: ${person.Name} - Date: ${person.Date} - Favorite Movie: ${person["Favorite Movie"]}`
    )
  );
} else {
  console.log("No active people found!!!");
}

// Step 6: Sorting function (Backbone to sort the array)
export function sortByProp(peopleArr: Person[], prop: keyof Person): Person[] {
  const arrCopy = [...peopleArr]; //to work over a copy of the original array

  return arrCopy.sort((a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  });
}

// Example usage of sorting function
const sortedByName = sortByProp(peopleArray, "Name");
const sortedByFood = sortByProp(peopleArray, "Favorite Food");
const sortedByMovie = sortByProp(peopleArray, "Favorite Movie");

console.log("Sorted by Name:", sortedByName);
console.log("Sorted by Food:", sortedByFood);
console.log("Sorted by Movie:", sortedByMovie);

//Get object keys
function getObjectKeys(obj: Person): string[] {
  return Object.keys(obj);
}

export const personKeys = getObjectKeys(alexisObj);
