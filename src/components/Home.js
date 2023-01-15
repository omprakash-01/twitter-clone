import { db } from "../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import Condtiom from "./Condtiom";
import Feed from "../Feed";
import Widgets from "../Widgets";
import Sidebar from "../Sidebar";
function Home() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const user = false;
  return (
    <div className="home">
      {user ? <Sidebar></Sidebar> : <Condtiom></Condtiom>}
      <Feed></Feed>
      <Widgets></Widgets>
    </div>
  );
}
export default Home;
