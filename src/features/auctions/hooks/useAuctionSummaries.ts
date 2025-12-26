import { useQuery } from "@tanstack/react-query";
import { fetchAuctionSummaries } from "../api/auctions.api";

export const useAuctionSummaries = () =>
  useQuery({
    queryKey: ["auctionSummaries"],
    queryFn: fetchAuctionSummaries,
    staleTime: 30_000,
  });
