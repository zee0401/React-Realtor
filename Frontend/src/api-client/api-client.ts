import { RegisterFormData } from "../pages/Register";
import axios from "axios";
import { SignInFormData } from "../pages/SignIn";

import { HotelType } from "../../../backend/src/shared/types";

export const registerUser = async (formData: RegisterFormData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    formData,
    {
      withCredentials: true,
    }
  );

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export const validateToken = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/auth/validate-token",
    {
      withCredentials: true,
    }
  );

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export const signOut = async () => {
  const response = await axios.post("http://localhost:5000/api/auth/logout", {
    withCredentials: true,
  });

  if (response.status !== 200) {
    throw new Error("Error during signout");
  }
};

export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await axios.post(
    "http://localhost:5000/api/my-hotels",
    hotelFormData,
    {
      withCredentials: true,
    }
  );

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};

// export const addMyHotel = async (hotelFormData: FormData) => {
//   const response = await fetch("http://localhost:5000/api/my-hotels", {
//     method: "POST",
//     credentials: "include",
//     body: hotelFormData,
//   });

//   if (!response.ok) {
//     throw new Error("Failed to add hotel");
//   }

//   return response.json();
// };

export const fetchMyHotels = async (): Promise<HotelType[]> => {
  const response = await axios.get("http://localhost:5000/api/my-hotels", {
    withCredentials: true,
  });

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};

// export const fetchMyHotels = async (): Promise<HotelType[]> => {
//   const response = await fetch("http://localhost:5000//api/my-hotels", {
//     credentials: "include",
//   });

//   if (!response.ok) {
//     throw new Error("Error fetching hotels");
//   }

//   return response.json();
// };

export const fetchMyHotelById = async (hotelId: string) => {
  const response = await axios.get(
    `http://localhost:5000/api/my-hotels/${hotelId}`,
    {
      withCredentials: true,
    }
  );
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};
