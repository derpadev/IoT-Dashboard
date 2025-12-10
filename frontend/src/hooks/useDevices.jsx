import { useState, useEffect } from "react";

export const useDevices = () => {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/devices");
        const data = await response.json();
        setDevices((prev) => {
          const newData = prev.concat(
            data.map((d) => ({
              ...d,
              id: d.device + Date.now(),
            }))
          );
          return newData.slice(-50);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);
  return devices;
};
