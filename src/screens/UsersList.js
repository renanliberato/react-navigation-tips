import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading, useLoading } from "../hooks/useLoading";
import { SimpleList } from "../components/SimpleList";
import { BackButton } from "../components/BackButton";

const externalUsers = [
  { name: "Beatriz", redirectTo: "/users/Beatriz" },
  { name: "Renan", redirectTo: "/users/Renan" },
  { name: "Maria", redirectTo: "/users/Maria" },
  { name: "Lais", redirectTo: "/users/Lais" },
  { name: "José", redirectTo: "/users/José" }
];

var usersCache = [];

export function UsersList(props) {
  const [users, setUsers] = useState([]);
  const { isLoading, setIsLoading } = useLoading(true);

  useEffect(() => {
    if (usersCache.length > 0) {
      setUsers(usersCache);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      usersCache = externalUsers;
      setUsers(externalUsers);
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    <div>
      <h1>Users</h1>
      <BackButton history={props.history} redirectTo="/" />
      {isLoading ? <Loading /> : <SimpleList items={users} />}
    </div>
  );
}
