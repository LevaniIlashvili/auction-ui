import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuctionListPage from "../features/auctions/pages/auctionListPage";
import AuctionDetailsPage from "../features/auctions/pages/auctionDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuctionListPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
