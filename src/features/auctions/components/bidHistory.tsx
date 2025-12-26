import type { Bid } from "../types/auction.types";

export default function BidHistory({ bids }: { bids: Bid[] }) {
  return (
    <ul>
      {bids.map((bid) => (
        <li key={bid.id}>
          <p>{bid.amount}</p>
          <p>{bid.bidTime}</p>
        </li>
      ))}
    </ul>
  );
}
