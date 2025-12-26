import AuctionCard from "../components/auctionCard";
import { useAuctionSummaries } from "../hooks/useAuctionSummaries";

export default function AuctionListPage() {
  const { data, isLoading, error } = useAuctionSummaries();

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error</div>;

  return (
    <div>
      {data.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
  );
}
