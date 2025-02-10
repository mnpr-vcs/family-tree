import Search from "./Search";
import Link from "next/link";

export default function  Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Family Tree</Link>
        </h1>
        <Search />
      </div>
    </header>
  );
}
