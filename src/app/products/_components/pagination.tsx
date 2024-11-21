import { useState, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useProductStore from "@/components/stores/productsStore";
import { useProductsQuery } from "@/app/homePage/_utils/fetchProducts";
import useUpdateSearchParams from "@/customHooks/useUpdateSearchParams";

export const PaginationComp = () => {
  const { setSearchParam } = useUpdateSearchParams();
  const { nbProductsToShow, sortBy } = useProductStore();
  const { data: products, isLoading } = useProductsQuery(sortBy || "asc");

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    if (!products || nbProductsToShow <= 0) return 1;
    return Math.ceil(products.length / nbProductsToShow);
  }, [products, nbProductsToShow]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    setSearchParam("page", String(page));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
          />
        </PaginationItem>
        {totalPages > 0 &&
          Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page} className={`${currentPage==page? "bg-gray-600 text-white" :""}`}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
