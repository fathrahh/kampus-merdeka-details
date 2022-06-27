import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";

import styles from "./styles/App.module.css";
import {
  BASE_URL_API_MAGANG,
  colTable,
  URL_DETAIL_MAGANG,
} from "./utils/const";
import { dateFormatter } from "./utils/dateFormatter";

import ButtonLinkDetail from "./components/ButtonLinkDetail";

function App() {
  const [dataMagang, setDataMagang] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = async () => {
    const {
      data: { data },
    } = await axios.get(BASE_URL_API_MAGANG);
    const filtererData = data.map((item, idx) => {
      return {
        ...item,
        no: idx + 1,
        start_registration: dateFormatter(item.start_registration),
        end_registration: dateFormatter(item.end_registration),
        detail: (
          <ButtonLinkDetail href={URL_DETAIL_MAGANG(item.mitra_id, item.id)}>
            Details
          </ButtonLinkDetail>
        ),
      };
    });
    setDataMagang(filtererData);
    setIsLoading(false);
  };
  const fetchRef = useRef(fetcher);

  useEffect(() => {
    fetchRef.current();
  }, []);

  return (
    <div className={styles["container"]}>
      <h1
        style={{
          color: "#FCA311",
        }}
      >
        Daftar Magang Kampus Merdeka Yang Ready
      </h1>
      <h3 style={{ color: "#E4E4E4" }}>
        Noted : Blended adalah Hybrid Offline adalah Datang ke kantor
      </h3>
      <h3 style={{ color: "#E4E4E4" }}>
        Kuota adalah kapasitas yang akan diterima
      </h3>
      {isLoading ? (
        "Fetching Data"
      ) : (
        <DataTable columns={colTable} data={dataMagang} />
      )}
      {/* option 2 */}
      {/* <table className={styles["table"]}>
        <Th>No</Th>
        <Th>Name</Th>
        <Th>Mitra</Th>
        <Th>Activity Name</Th>
        <Th>Kuota</Th>
        <Th>Activity Type</Th>
        <Th>Location</Th>
        <Th>start regist</Th>
        <Th>end regist</Th>
        <Th>Detail</Th>
        {dataMagang.map((data, idx) => (
          <tr>
            <Td>{idx + 1}</Td>
            <Td className={styles["table-list"]}>{data.name}</Td>
            <Td>{data.mitra_name}</Td>
            <Td>{data.activity_name}</Td>
            <Td>{data.total}</Td>
            <Td>{data.activity_type}</Td>
            <Td>{data.location}</Td>
            <Td>{dateFormatter(data.start_registration)}</Td>
            <Td>{dateFormatter(data.end_registration)}</Td>
            <Td>
              
            </Td>
          </tr>
        ))}
      </table> */}
    </div>
  );
}

export default App;
