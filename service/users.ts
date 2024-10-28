import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type DOB = {
  age: number;
};

type Picture = {
  medium: string;
};
export type User = {
  dob: DOB;
  cell: string;
  picture: Picture;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  [key: string]: any;
};
export const useUsers = () => {
  const fetchMovies = async () => {
    const { data } = await axios.get(`https://randomuser.me/api/?results=15`);
    return data.results;
  };

  const query = useQuery<User[], AxiosError>({
    queryKey: ["Users"],
    queryFn: fetchMovies,
  });

  return query;
};
