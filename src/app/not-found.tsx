import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  const isLoggedIn = false; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <img
          src="/pictures/not-found.png"
          alt="404 illustration"
          className="w-48 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg mb-6">
          {isLoggedIn
            ? "We’re currently on a maintenance break. Please try again later."
            : "You might be lost or not logged in."}
        </p>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Try Again
            </button>
          ) : (
            <Link
              href="/api/auth/login"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Log In
            </Link>
          )}
          <Link
            href="/"
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
