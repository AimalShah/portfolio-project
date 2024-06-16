import { Link } from "react-router-dom"
export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 py-12 md:py-24 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Oops, page not found</h1>
          <p className="text-gray-500 dark:text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to={"/"}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    )
  }