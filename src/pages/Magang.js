import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import styles from "../styles/App.module.css";
import {
  BASE_URL_API_MAGANG,
  colTable,
  URL_DETAIL_MAGANG,
} from "../utils/const";

import { dateFormatter } from "../utils/dateFormatter";
import ButtonLinkDetail from "../components/ButtonLinkDetail";
import Loading from "../components/Loading";

const Magang = () => {
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
          <DataTable columns={colTable} data={dataMagang} />
        </>
      )}
    </div>
  );
};

export default Magang;
