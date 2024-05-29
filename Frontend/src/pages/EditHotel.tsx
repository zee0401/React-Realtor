import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client/api-client";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
// import { useAppContext } from "../context/AppContext";

const EditHotel = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  return <ManageHotelForm hotel={hotel} />;
};

export default EditHotel;
