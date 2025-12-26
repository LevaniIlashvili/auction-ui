import axios from "axios";
import { http } from "../../../shared/api/httpClient";
import type { AuctionDetails, AuctionSummary } from "../types/auction.types";

export const fetchAuctionSummaries = (): Promise<AuctionSummary[]> =>
  http.get("/auction");

export const fetchAuctionDetails = (
  auctionId: string
): Promise<AuctionDetails> => http.get(`/auction/${auctionId}`);

export const placeBid = async (auctionId: string, amount: number) => {
  try {
    return await http.post(`/auction/${auctionId}/bids`, { auctionId, amount });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data?.error || "Something went wrong";
      throw new Error(message);
    }
    throw err;
  }
};
