import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { auctionHubConnection } from "../../../shared/api/signalr";
import {
  type AuctionSummary,
  type AuctionDetails,
  type Bid,
} from "../types/auction.types";

export const useBidUpdates = (auctionId: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const joinAndListen = async () => {
      while (
        auctionHubConnection.state === "Connecting" ||
        auctionHubConnection.state === "Reconnecting"
      ) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      if (auctionHubConnection.state === "Connected") {
        try {
          await auctionHubConnection.invoke("JoinAuction", auctionId);
          console.log("Joined auction group: " + auctionId);
        } catch (err) {
          console.error("Failed to join group:", err);
        }
      }
    };

    const handleBid = (newBid: Bid) => {
      queryClient.setQueryData<AuctionDetails>(
        ["auctionDetails", auctionId],
        (old) => {
          if (!old) return old;
          return {
            ...old,
            bids: [newBid, ...old.bids],
            currentHighestBid: newBid.amount,
          };
        }
      );

      queryClient.setQueryData<AuctionSummary[]>(
        ["auctionSummaries"],
        (oldData) => {
          return oldData?.map((auction: AuctionSummary) =>
            auction.id == auctionId
              ? { ...auction, currentHighestBid: newBid.amount }
              : auction
          );
        }
      );
    };

    auctionHubConnection.on("BidPlaced", handleBid);
    joinAndListen();

    return () => {
      auctionHubConnection.off("BidPlaced", handleBid);
      if (auctionHubConnection.state === "Connected") {
        auctionHubConnection
          .invoke("LeaveAuction", auctionId)
          .catch(console.error);
      }
    };
  }, [auctionId, queryClient]);
};
