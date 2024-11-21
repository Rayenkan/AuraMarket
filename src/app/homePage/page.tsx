"use client";
import { Footer } from "../../components/reusable/footer";
import { Products } from "./_components/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Categories } from "./_components/Categories";
import Discover from "./_components/discover";
import TopBar from "@/components/reusable/topBar";
import { Separator } from "@/components/ui/separator";

const queryClient = new QueryClient();

const Page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-screen bg-white overflow-x-hidden">
        <TopBar />
        <Discover />
        <Categories />
        <Products limit={8} />
        <Separator className="my-12" />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Page;
