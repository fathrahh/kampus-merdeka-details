export const BASE_URL_API_MAGANG =
  "https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/position?offset=0&limit=10000";

export const BASE_URL_API_STUPEN =
  "https://api.kampusmerdeka.kemdikbud.go.id/studi/browse/activity?offset=0&limit=1000";

export const URL_DETAIL_MAGANG = (mitra_id, id) => {
  return `https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/${mitra_id}/${id}`;
};

export const URL_DETAIL_STUPEN = (mitra_id, id) => {
  return `https://kampusmerdeka.kemdikbud.go.id/program/studi-independen/browse/${mitra_id}/${id}`;
};

export const colTable = [
  {
    name: "No",
    selector: (row) => row.no,
    style: {
      padding: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 75,
      minWidth: 75,
    },
  },
  {
    name: "Name",
    selector: (row) => row.name,
    wrap: true,
    style: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  {
    name: "Mitra",
    selector: (row) => row.mitra_name,
  },
  {
    name: "Activity Name",
    selector: (row) => row.activity_name,
  },
  {
    name: "Kuota",
    selector: (row) => row.total,
    sortable: true,
  },
  {
    name: "Activity Type",
    selector: (row) => row.activity_type,
  },
  {
    name: "Location",
    selector: (row) => row.location,
  },
  {
    name: "Start Registration",
    selector: (row) => row.start_registration,
  },
  {
    name: "End Registration",
    selector: (row) => row.end_registration,
  },
  {
    name: "Details",
    selector: (row) => row.detail,
  },
];

export const colTableStupen = [
  {
    name: "No",
    selector: (row) => row.no,
    style: {
      padding: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 75,
      minWidth: 75,
    },
  },
  {
    name: "Name",
    selector: (row) => row.name,
    wrap: true,
    style: {
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  {
    name: "Mitra",
    selector: (row) => row.mitra_name,
  },
  {
    name: "Mulai Stupen",
    selector: (row) => row.start_duration,
  },
  {
    name: "Durasi Stupen",
    selector: (row) => row.end_duration,
  },
  {
    name: "Kuota",
    selector: (row) => row.participants_count,
    sortable: true,
  },
  {
    name: "Location",
    selector: (row) => row.location,
  },
  {
    name: "Start Registration",
    selector: (row) => row.start_registration,
  },
  {
    name: "End Registration",
    selector: (row) => row.end_registration,
  },
  {
    name: "Details",
    selector: (row) => row.detail,
  },
];
