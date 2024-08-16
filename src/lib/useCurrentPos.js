import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = "33.450701";
  const defaultLon = "126.570667";
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return { lat, lon };
};
