import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

// import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  // const navition = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password, role) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });
    const json = await response.json();

    console.log(json.token);

    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
//,json,navition

// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
// import axios from "axios";

// export const useLogin = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const { dispatch } = useAuthContext();

//   const login = async (email, password, role) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get("http://localhost:8080/login", {
//         headers: {
//           'Authorization': `Bearer ${token}`
//       },
//         email,
//         password,
//         role,
//       });

//       const json = response.data;

//       console.log(json);

//       // save the user to local storage
//       localStorage.setItem("user", JSON.stringify(json));

//       // update the auth context
//       dispatch({ type: "LOGIN", payload: json });

//       // update loading state
//       setIsLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setIsLoading(false);
//     }
//   };

//   return { login, error, isLoading };
// };
