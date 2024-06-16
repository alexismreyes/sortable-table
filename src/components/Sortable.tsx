import { useEffect, useState } from "react";
import {
  peopleArray,  
  personKeys,
  sortByProp,
} from "../solution/Solution.ts"; //importing the logic background with solved requirements
import { Person } from "../solution/People.ts"
import PeopleTable from "./PeopleTable.tsx";
import "../assets/Sortable.css"


const Sortable = () => {
  const [people, setPeople] = useState<Person[]>([]); //Holds the original list of people. It serves as the base data from which sorted versions are created.
  const [sortedPeople, setSortedPeople] = useState<Person[]>([]); //Holds the sorted version of the people array based on the selected sorting criteria
  const [selectedKey, setSelectedKey] = useState<keyof Person>("Name"); 
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  //loads the initial people array and sort people based in initial key and order values (Name and Asc)
  useEffect(() => {
    setPeople(peopleArray); 
    sortPeople(selectedKey, sortOrder);
  }, []);

  //listen to changes on the selectedKey and sortOrder states to re-sort the people array
  useEffect(() => {
    sortPeople(selectedKey, sortOrder);
  }, [selectedKey, sortOrder, people]);

  //sorts the people array based in the given key and sortOrder, it uses the sortByProp method from Solution.ts
  //sets the sortedPeople array to render
  const sortPeople = (key: keyof Person, order: "asc" | "desc") => {
    const sorted = sortByProp(people, key);
    setSortedPeople(order === "asc" ? sorted : sorted.reverse());
  };

  //sets the selected key based on user selection in select list
  //sets initially sort order as ASC
  const sendKey = (e) => {
    setSelectedKey(e.target.value);
    setSortOrder("asc");
  }; 

  //re-sort the array asc or desc depending on its previous value
  const handleSort = (key: keyof Person) => {
    const order = (key === selectedKey && sortOrder === "asc") ? "desc" : "asc";
    setSortOrder(order);
    setSelectedKey(key);
  };

  //awaits until people and sortedPeople has a value to render the table
  if (!people || !sortedPeople) return <h1>LOADING....</h1>;

  return (
    <>
      <div  className="table-container-sort">
      <div className="table-wrapper">
      <PeopleTable       
      people={sortedPeople}      
      handleSort={handleSort} 
      />
      </div>
      <div  className="select-container">
        <p>
          <label className="sortable-label">Sort by:</label> {/* renders the select list based in Object keys from alexisObj */}
          <select value={selectedKey} onChange={sendKey}>
            {personKeys.map((key, index) => (
              <option key={index} value={key} className="sortable-label">
                {key}
              </option>
            ))}
          </select>
        </p>
      </div>
      </div>
    </>
  );
};

export default Sortable;
