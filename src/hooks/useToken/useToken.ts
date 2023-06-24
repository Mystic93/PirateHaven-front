import { useCallback } from "react";
import jwt_decode from "jwt-decode";
import { UserWithoutTokenStructure } from "../../store/user/types";

const useToken = () => {
  const getTokenData = useCallback(
    (token: string): UserWithoutTokenStructure => {
      const decodedTokenData: { sub: string; name: string } = jwt_decode(token);
      const userSessionData = {
        id: decodedTokenData.sub,
        name: decodedTokenData.name,
      };
      return userSessionData;
    },
    []
  );

  return { getTokenData };
};

export default useToken;
