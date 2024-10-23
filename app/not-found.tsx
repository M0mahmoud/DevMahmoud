import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm p-6 text-center ">
        <h1 className="mt-4 text-2xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2">
          Sorry, we couldn&apos;t find the page you&rsquo;re looking for.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 mt-4 text-white rounded-md sp"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
