import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeBid } from "../api/auctions.api";

export const usePlaceBid = (auctionId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (amount: number) => placeBid(auctionId, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auctionDetails", auctionId],
      });
      queryClient.invalidateQueries({ queryKey: ["auctionSummaries"] });
    },
  });
};
