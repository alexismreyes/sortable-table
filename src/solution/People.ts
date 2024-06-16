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
        Status: 'Active',        
}

//exporting the objects
export {
    rockyObj,
    miroslavObj,
    donnyObj,
    mattObj,
    alexisObj,
  };