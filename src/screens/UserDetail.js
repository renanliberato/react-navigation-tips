import React, { useEffect, useState } from "react";
import { useLoading, Loading } from "../hooks/useLoading";
import { SimpleList } from "../components/SimpleList";
import { Link } from "react-router-dom";
import { BackButton } from "../components/BackButton";

const externalHobbies = [
  { name: "Playing tennis" },
  { name: "Programming" },
  { name: "Playing videogames" },
  { name: "Cooking" },
  { name: "Surfing" }
];

var userDetailCache = null;

export function UserDetail(props) {
  const name = props.match.params.name;

  const [hobbies, setHobbies] = useState([]);
  const { isLoading, setIsLoading } = useLoading(true);

  useEffect(() => {
    if (userDetailCache != null && userDetailCache.name === name) {
      setHobbies(userDetailCache.hobbies);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      userDetailCache = {
        name: name,
        hobbies: externalHobbies
      };

      setHobbies(externalHobbies);
      setIsLoading(false);
    }, 3000);
  }, [name, setIsLoading]);

  return (
    <div>
      <h1>{name}</h1>
      <BackButton history={props.history} redirectTo="/users" />
      {isLoading ? <Loading /> : <SimpleList items={hobbies} />}
    </div>
  );
}
