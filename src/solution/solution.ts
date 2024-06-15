//Step 1: Define Person Interface for all the objects
export interface Person{
    Name: string;
    'Favorite Food': string;
    'Favorite Movie': string;
    Status: 'Active' | 'Inactive';
    Date?: string;
}

//Step 2: Create the objects    
const rockyObj: Person = {
    Name: 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    Status: 'Inactive'
}

const miroslavObj: Person = {
        Name: 'Miroslav',
        'Favorite Food': 'Sushi',
        'Favorite Movie': 'American Psycho',
        Status: 'Active'
}

const donnyObj: Person ={
        Name: 'Donny',
        'Favorite Food': 'Singapore chow mei fun',
        'Favorite Movie': 'The Princess Bride',
        Status: 'Inactive'
}

const mattObj: Person ={
        Name: 'Matt',
        'Favorite Food': 'Brisket Tacos',
        'Favorite Movie': 'The Princess Bride',
        Status: 'Active'

}

const alexisObj: Person = {
        Name: 'Alexis Reyes',
        'Favorite Food': 'Grill Meat',
        'Favorite Movie': 'Lord of The Rings',
        Status: 'Active'
}

//Step 3: Create an array using this objects
export const peopleArray: Person[] = [rockyObj,miroslavObj,donnyObj,mattObj,alexisObj];

//Step 4: Iterate through the array, add the current date
const currentDate: string = new Date().toLocaleString();
peopleArray.forEach((person) =>(
    person.Date = currentDate
))

//Step 5: Console.log the active records showing the name, date and favorite movie. Include code it no Active poeple found!

    //Create array for active people  
const activePeople: Person[] = peopleArray.filter( person => person.Status === 'Active');

    //log to console array for Active people
if(activePeople.length > 0){
    activePeople.forEach(person=> console.log(`Name: ${person.Name} - Date: ${person.Date} - Favorite Movie: ${person["Favorite Movie"]}` ))
}
else{
    console.log("No active people found!!!");         
}

// Step 6: Sorting function
export function sortByProp(peopleArr: Person[], prop: keyof Person): Person[] {

const arrCopy = [...peopleArr]; //to work over a copy of the original array

return arrCopy.sort((a, b) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
});
}

// Example usage of sorting function
const sortedByName = sortByProp(peopleArray, 'Name');
const sortedByFood = sortByProp(peopleArray, 'Favorite Food');
const sortedByMovie = sortByProp(peopleArray, 'Favorite Movie');

console.log('Sorted by Name:', sortedByName);
console.log('Sorted by Food:', sortedByFood);
console.log('Sorted by Movie:', sortedByMovie);

//Get object keys
function getObjectKeys(obj: Person):string[]{
    return Object.keys(obj);
}

export const personKeys = getObjectKeys(alexisObj);
