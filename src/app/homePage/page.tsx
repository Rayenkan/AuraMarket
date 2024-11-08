"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Categories } from "./components/Categories";
import Discover from "./components/discover";
import TopBar from "./components/topBar";

const queryClient = new QueryClient();

const Page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-screen bg-white overflow-x-hidden">
        <TopBar />
        <Discover />
        <Categories />
      </div>
    </QueryClientProvider>
  );
};

export default Page;
