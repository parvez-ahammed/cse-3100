 import { Flex, IconButton, Text } from "@chakra-ui/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";

export default function Pagination({
  page,
  totalPages,
  name,
  status,
  setSearchParams,
}) {
  const updatePage = (newPage) => {
    setSearchParams({ name, status, page: newPage });
  };

  return (
    <Flex mt={8} justify="center" gap={2} align="center" flexWrap="wrap">
      <IconButton
        aria-label="First"
        icon={<ChevronsLeft size={24} />}
        onClick={() => updatePage(1)}
        isDisabled={page <= 1}
        variant="ghost"
        borderRadius="full"
        minW="40px"
        p={1}
      />

      <IconButton
        aria-label="Previous"
        icon={<ChevronLeft size={24} />}
        onClick={() => updatePage(Math.max(page - 1, 1))}
        isDisabled={page <= 1}
        variant="ghost"
        borderRadius="full"
        minW="40px"
        p={1}
      />

      <Text fontWeight="medium" fontSize="md" overflowWrap="break-word" wordBreak="break-word">
        Page {page} of {totalPages}
      </Text>

      <IconButton
        aria-label="Next"
        icon={<ChevronRight size={24} />}
        onClick={() => updatePage(Math.min(page + 1, totalPages))}
        isDisabled={page >= totalPages}
        variant="ghost"
        borderRadius="full"
        minW="40px"
        p={1}
      />

      <IconButton
        aria-label="Last"
        icon={<ChevronsRight size={24} />}
        onClick={() => updatePage(totalPages)}
        isDisabled={page >= totalPages}
        variant="ghost"
        borderRadius="full"
        minW="40px"
        p={1}
      />
    </Flex>
  );
}
