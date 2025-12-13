import { useState, useEffect, useCallback } from "react";

export const useDevices = () => {
  const [devices, setDevices] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/devices");
      const data = await response.json();
      setDevices((prev) => {
        const merged = [...prev, ...data];
        return merged.slice(-50);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15_000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return {
    devices,
    refetch: fetchData,
  };
};
