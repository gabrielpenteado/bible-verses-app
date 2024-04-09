import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Verse } from "@/interfaces/verseInterface";
import { AxiosPromise } from "axios";

const fetchData = async () => {
  const response = await api.get<Verse>("verses/nvi/random");
  return response.data;
};

export function useVerse() {
  const query = useQuery({
    queryKey: ["verse"],
    queryFn: fetchData,
    // staleTime: 1000 * 60 * 60 * 24,
    // refetchInterval: 1000 * 60 * 60 * 24,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
  });

  return query;
}
