// v0.dev blackmagic
import { Button, Box, IconButton } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreHoriz,
} from "@mui/icons-material";

export default function Pagination({
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage);
    setSearchParams(newParams);
  };

  const generatePageNumbers = () => {
    const maxVisiblePages = 5;
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = generatePageNumbers();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        mt: 3,
      }}
    >
      <Button
        variant="contained"
        startIcon={<KeyboardArrowLeft />}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrev}
        sx={{
          minWidth: 100,
          textTransform: "none",
        }}
      >
        Previous
      </Button>

      <Box sx={{ display: "flex", gap: 0.5 }}>
        {visiblePages[0] > 1 && (
          <>
            <IconButton
              onClick={() => handlePageChange(1)}
              size="small"
              sx={{ fontSize: "0.875rem" }}
            >
              1
            </IconButton>
            {visiblePages[0] > 2 && (
              <MoreHoriz sx={{ mx: 0.5, color: "text.disabled" }} />
            )}
          </>
        )}

        {visiblePages.map((page) => (
          <IconButton
            key={page}
            onClick={() => handlePageChange(page)}
            size="small"
            sx={{
              fontSize: "0.875rem",
              bgcolor: currentPage === page ? "primary.main" : "transparent",
              color: currentPage === page ? "primary.contrastText" : "inherit",
              "&:hover": {
                bgcolor: currentPage === page ? "primary.dark" : "action.hover",
              },
            }}
          >
            {page}
          </IconButton>
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <MoreHoriz sx={{ mx: 0.5, color: "text.disabled" }} />
            )}
            <IconButton
              onClick={() => handlePageChange(totalPages)}
              size="small"
              sx={{ fontSize: "0.875rem" }}
            >
              {totalPages}
            </IconButton>
          </>
        )}
      </Box>

      <Button
        variant="contained"
        endIcon={<KeyboardArrowRight />}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNext}
        sx={{
          minWidth: 100,
          textTransform: "none",
        }}
      >
        Next
      </Button>
    </Box>
  );
}
