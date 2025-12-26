import { useParams } from "react-router-dom";
import { useAuctionDetails } from "../hooks/useAuctionDetails";
import BidHistory from "../components/bidHistory";
import BidForm from "../components/bidForm";

export default function AuctionDetailsPage() {
  const { auctionId } = useParams<{ auctionId: string }>();
  const { data: auction, isLoading, error } = useAuctionDetails(auctionId!);

  if (isLoading) return <div>Loading...</div>;
  if (error || !auction) return <div>Error!</div>;

  return (
    <div className="flex p-10 justify-between">
      <div>
        <h2>{auction.name}</h2>
        <p>{auction.description}</p>
        <p>starting price: {auction.startingPrice}</p>
        <p>status: {auction.auctionStatus}</p>
        <p>highest bid: {auction.currentHighestBid}</p>
        <p>start date: {auction.startDate}</p>
        <p>end date: {auction.endDate}</p>
      </div>
      <div>
        <BidForm auctionId={auction.id} />
        <BidHistory bids={auction.bids} />
      </div>
    </div>
  );
}
