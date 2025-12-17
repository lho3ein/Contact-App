"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`dark container mx-auto flex justify-center mt-24 px-2`}>
        <Link
          href="/contact"
          type="submit"
          className="bg-blue-700 text-white rounded-md bg-opacity-85 py-2 px-5"
        >
          Go Contact App
        </Link>
      </div>
    </>
  );
}
