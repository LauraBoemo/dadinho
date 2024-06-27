import { useState } from "react";
import { GetUsersResponse, getUsers } from "./userService";

export interface UserRole {
  role: string;
}

const useGetUsers = () => {
  const [userData, setUserData] = useState<GetUsersResponse[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (userData: UserRole) => {
    try {
      const { role } = userData;
      setLoading(true);
      setUserData(null);
      setError(null);
      const res = (await getUsers({
        params: { role: role },
      })) as unknown as GetUsersResponse[];
      setUserData(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, userData, loading, error];
};

export { useGetUsers };
