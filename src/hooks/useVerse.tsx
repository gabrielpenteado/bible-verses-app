import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Verse } from "@/interfaces/verseInterface";

const fetchData = async (): Promise<Verse[]> => {
  const response = await api.get("?random=verse");
  return response.data.verses;
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
