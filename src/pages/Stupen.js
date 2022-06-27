import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import styles from "../styles/App.module.css";
import {
  BASE_URL_API_STUPEN,
  colTableStupen,
  URL_DETAIL_STUPEN,
} from "../utils/const";

import ButtonLinkDetail from "../components/ButtonLinkDetail";
import Loading from "../components/Loading";

const Stupen = () => {
  const [dataStupen, setDataStupen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = async () => {
    const {
      data: { data },
    } = await axios.get(BASE_URL_API_STUPEN);
    const filtererData = data.map((item, idx) => {
      return {
        ...item,
        no: idx + 1,
        detail: (
          <ButtonLinkDetail href={URL_DETAIL_STUPEN(item.mitra_id, item.id)}>
            Details
          </ButtonLinkDetail>
        ),
      };
    });
    setDataStupen(filtererData);
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
            Daftar Stupen Kampus Merdeka Yang Ready
          </h1>
          <h3 style={{ color: "#E4E4E4" }}>
            Kuota adalah kapasitas yang akan diterima
          </h3>
          <DataTable columns={colTableStupen} data={dataStupen} />
        </>
      )}
    </div>
  );
};

export default Stupen;
