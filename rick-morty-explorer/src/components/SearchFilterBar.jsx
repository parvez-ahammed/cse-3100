// src/components/SearchFilterBar.jsx
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

export default function SearchFilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    setSearchParams(prev => {
      prev.set("name", e.target.value);
      return prev;
    });
  };

  const handleStatus = (value) => {
    setSearchParams(prev => {
      if (value) prev.set("status", value);
      else prev.delete("status");
      return prev;
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <Input
        placeholder="Search characters by name"
        value={searchParams.get("name") || ""}
        onChange={handleSearch}
        className="max-w-sm"
      />
      <Select onValueChange={handleStatus} defaultValue={searchParams.get("status") || ""}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alive">Alive</SelectItem>
          <SelectItem value="dead">Dead</SelectItem>
          <SelectItem value="unknown">Unknown</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
