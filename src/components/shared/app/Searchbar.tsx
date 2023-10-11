"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface Props {
  routeType: string;
}

function Searchbar({ routeType }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      value={search}
      onChange={handleSearch}
      fullWidth={true}
      placeholder={`${
        routeType !== "/search" ? "Search communities" : "Search creators"
      }`}
    />
  );
}

export default Searchbar;
