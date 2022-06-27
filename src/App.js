import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BASE_URL_API_MAGANG } from "./utils/const";
import { dateFormatter } from "./utils/dateFormatter";

function App() {
  const [dataMagang, setDataMagang] = useState([]);
  const [search, setSearch] = useState("");

  const fetcher = async () => {
    const {
      data: { data },
    } = await axios.get(BASE_URL_API_MAGANG);
    setDataMagang(data);
  };
  const fetchRef = useRef(fetcher);

  useEffect(() => {
    fetchRef.current();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={fetcher}>Search</button>
      <table>
        <th>No</th>
        <th>Name</th>
        <th>Mitra</th>
        <th>Activity Name</th>
        <th>Kuota</th>
        <th>Activity Type</th>
        <th>Location</th>
        <th>start regist</th>
        <th>end regist</th>
        {dataMagang.map((data, idx) => (
          <tr>
            <td>{idx + 1}</td>
            <td>{data.name}</td>
            <td>{data.mitra_name}</td>
            <td>{data.activity_name}</td>
            <td>{data.total}</td>
            <td>{data.activity_type}</td>
            <td>{data.location}</td>
            <td>{dateFormatter(data.start_registration)}</td>
            <td>{dateFormatter(data.end_registration)}</td>
          </tr>
        ))}
      </table>
      {/* <pre>{JSON.stringify(dataMagang, null, 2)}</pre> */}
    </div>
  );
}

export default App;
