// "use client";

// import { useRouter } from "next/navigation";
// import { useState, useEffect, ChangeEvent } from "react";
// import Image from "next/image";
// import { Input } from "../ui/input";

// interface Props {
//   routeType: string;
// }

// function Searchbar({ routeType }: Props) {
//   const router = useRouter();

//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (search) {
//         router.push(`/${routeType}?q=` + search);
//       } else {
//         router.push(`/${routeType}`);
//       }
//     }, 500);

//     return () => clearTimeout(delayDebounceFn);
//   }, [search, routeType]);

//   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setSearch(e.target.value);
//   };

//   return (
//     <div className="searchbar">
//       <Image
//         src="/assets/search-gray.svg"
//         alt="search"
//         width={24}
//         height={24}
//         className="object-contain"
//       />
//       <Input
//         id="text"
//         value={search}
//         onChange={handleSearch}
//         placeholder={`${
//           routeType !== "/search" ? "Search communities" : "Search creators"
//         }`}
//         className="no-focus searchbar_input"
//       />
//     </div>
//   );
// }

// export default Searchbar;
