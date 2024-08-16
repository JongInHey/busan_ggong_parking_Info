import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>GGong_Parking | {title}</title>
    </Helmet>
  );
};
