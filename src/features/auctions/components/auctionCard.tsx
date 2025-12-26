import type { AuctionSummary } from "../types/auction.types";

export default function AuctionCard({ auction }: { auction: AuctionSummary }) {
  return (
    <div>
      <h3>{auction.name}</h3>
      <p>{auction.auctionStatus}</p>
      <p>{auction.currentHighestBid}</p>
      <p>{auction.startDate}</p>
      <p>{auction.endDate}</p>
    </div>
  );
}
