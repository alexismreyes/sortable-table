import { useEffect, useState } from "react";
import {
  peopleArray,
  Person,
  personKeys,
  sortByProp,
} from "../solution/solution.ts";
import PeopleTable from "./PeopleTable.tsx";

const Sortable = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [sortedPeople, setSortedPeople] = useState<Person[]>([]);
  const [selectedKey, setSelectedKey] = useState<keyof Person>("Name");

  useEffect(() => {
    setPeople(peopleArray);
    setSortedPeople(sortByProp(peopleArray,selectedKey));
  }, []);

  useEffect(() => {
    setSortedPeople(sortByProp(people, selectedKey));
  }, [selectedKey, people]);

  function sendKey(e) {
    console.log("e received->" + e.target.value);
    setSelectedKey(e.target.value);
  }

  if (!people || !sortedPeople) return <h1>LOADING....</h1>;

  return (
    <>
      <PeopleTable people={sortedPeople} />
      <div>
        <p>
          <label>Sort by:</label>
          <select value={selectedKey} onChange={sendKey}>
            {personKeys.map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
        </p>
      </div>
    </>
  );
};

export default Sortable;
