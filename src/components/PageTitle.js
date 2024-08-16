import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return <Helmet>GGong_Parking | {title}</Helmet>;
};
