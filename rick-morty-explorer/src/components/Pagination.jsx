import { Button } from "@/components/ui/button";

export default function Pagination({ page, setPage, hasNextPage }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <Button 
        variant="outline"
        disabled={page <= 1} 
        onClick={() => setPage(page - 1)}
        className="text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white"
      >
        Previous
      </Button>
      <Button 
        variant="outline"
        disabled={!hasNextPage} 
        onClick={() => setPage(page + 1)}
        className="text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white"
      >
        Next
      </Button>
    </div>
  );
}