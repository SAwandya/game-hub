import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
