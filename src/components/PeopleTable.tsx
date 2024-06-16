import { Person } from "../solution/People";
import "../assets/PeopleTable.css"
import "../assets/Common.css"

interface Props{
    people: Person[];    
    handleSort: (key: keyof Person) => void;
}

const PeopleTable: React.FC<Props> = ({people, handleSort}) => { 

  //Renders the table based in the sortedPeople array from the parent component  
  return (
    <>
    <div>
    <table className="table-container people-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("Name")} >NAME</th>
          <th onClick={() => handleSort("Favorite Food")}>FAVORITE FOOD</th>
          <th onClick={() => handleSort("Favorite Movie")}>FAVORITE MOVIE</th>
          <th onClick={() => handleSort("Status")}>STATUS</th>
        </tr>
      </thead>
      <tbody>        
        {people.map((personObj, index) => (
          <tr key={index}>            
            <td>{personObj.Name}</td>
            <td>{personObj["Favorite Food"]}</td>
            <td>{personObj["Favorite Movie"]}</td>
            <td>{personObj.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default PeopleTable;
