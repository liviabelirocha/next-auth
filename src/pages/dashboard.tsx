import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  useEffect(() => {
    api
      .get("/me")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const { user } = useContext(AuthContext);

  return <h1>Dashboard: {user?.email}</h1>;
}
