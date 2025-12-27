import { useEffect } from "react";
import { auctionHubConnection } from "../shared/api/signalr";

export const SignalRProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    let cancelled = false;

    const startConnection = async () => {
      if (auctionHubConnection.state === "Disconnected") {
        try {
          await auctionHubConnection.start();
          if (!cancelled) {
            console.log("SignalR Connected");
          }
        } catch (err) {
          if (!cancelled) {
            console.error("SignalR Connection Error:", err);
          }
        }
      }
    };

    startConnection();

    return () => {
      cancelled = true;
    };
  }, []);

  return <>{children}</>;
};
