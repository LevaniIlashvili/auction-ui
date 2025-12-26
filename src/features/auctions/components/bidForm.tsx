import { useState } from "react";
import { usePlaceBid } from "../hooks/usePlaceBid";

export default function BidForm({ auctionId }: { auctionId: string }) {
  const [amount, setAmount] = useState<number>(0);
  const {
    mutate: placeBid,
    isPending,
    error,
    isError,
  } = usePlaceBid(auctionId);

  return (
    <form action="#" className="flex-col">
      <label htmlFor="amount">amount</label>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="input amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          placeBid(amount);
        }}
        type="button"
        disabled={isPending}
      >
        Bid
      </button>
      {isError && <p className="text-red-500">{error.message}</p>}
    </form>
  );
}
