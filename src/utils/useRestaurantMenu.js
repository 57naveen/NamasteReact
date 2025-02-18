import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const fetchData = await fetch(MENU_URL + resId);
    const json = await fetchData.json();
    // console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
