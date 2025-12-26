import { useQuery } from "@tanstack/react-query";
import { fetchAuctionDetails } from "../api/auctions.api";

export const useAuctionDetails = (auctionId: string) =>
  useQuery({
    queryKey: ["auctionDetails", auctionId],
    queryFn: () => fetchAuctionDetails(auctionId),
    enabled: !!auctionId,
  });
