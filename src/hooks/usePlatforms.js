import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
