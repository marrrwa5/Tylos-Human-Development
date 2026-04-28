"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/courses?search=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="h-9 w-36 lg:w-44 px-4 py-2 bg-white/10 border border-white/20 border-r-0 rounded-l-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-turquoise/60 transition-colors"
      />
      <button
        type="submit"
        aria-label="Search"
        className="h-9 w-9 bg-turquoise flex items-center justify-center rounded-r-lg flex-shrink-0 hover:bg-turquoise-dark transition-colors duration-200"
      >
        <Search className="h-4 w-4 text-white" />
      </button>
    </form>
  );
}
