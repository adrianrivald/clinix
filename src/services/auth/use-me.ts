import { useQuery } from "@tanstack/react-query";
import { http } from "../../utils/http";
import { User } from "./types";

async function fetchMe() {
  const baseUrl = window.location.origin;

    const endpointUrl = new URL('/account/me', baseUrl);
  
    const { data } = await http<{data: User}>(
      endpointUrl.toString().replace(baseUrl, '')
    )
  
    return data
    }
  
    export function useMe() {
      const data = useQuery(
        ['me'],
        () => fetchMe()
      );
    
      return data;
    }