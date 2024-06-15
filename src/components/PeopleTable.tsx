import { Person } from "../solution/solution";

interface Props{
    people: Person[];
}

const PeopleTable: React.FC<Props> = ({people}) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Favorite food</th>
          <th>Favorite Movie</th>
          <th>Status</th>
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
    </>
  );
};

export default PeopleTable;
