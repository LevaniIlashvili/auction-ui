export type AuctionStatus = "PENDING" | "ACTIVE" | "FINISHED" | "CANCELED";

export interface Bid {
  id: string;
  amount: number;
  userId: string;
  bidTime: string;
}

export interface AuctionDetails {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  currentHighestBid: number;
  auctionStatus: AuctionStatus;
  startDate: string;
  endDate: string;
  winnerId: string | null;
  bids: Bid[];
}

export interface AuctionSummary {
  id: string;
  name: string;
  currentHighestBid: number;
  auctionStatus: AuctionStatus;
  startDate: string;
  endDate: string;
}
