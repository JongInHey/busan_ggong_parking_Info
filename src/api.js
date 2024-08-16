const fetch = require("node-fetch");

const baseUrl =
  "http://apis.data.go.kr/6260000/BusanPblcPrkngInfoService/getPblcPrkngInfo?";

const ServiceKey =
  "XFeZDljdQ%2B0MIJLE7iNgkxicxcla%2BQl%2F9i8veOL79Bjk5RNoucEbjPVL1I2cTNjttfKeqsUgnEEpTx8n9lGLyQ%3D%3D";

const options = `serviceKey=${ServiceKey}&numOfRows=20&pageNo=1&resultType=json`;

const url = () => {
  return baseUrl + options;
};

export const parkingInfo = () => fetch(url()).then((res) => res.json());

export const allParkingInfo = () => {
  const allurl =
    baseUrl + `serviceKey=${ServiceKey}&numOfRows=615&pageNo=1&resultType=json`;
  return fetch(allurl).then((res) => res.json());
};
