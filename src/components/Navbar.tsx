import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  const user = null;
  const isAuthor=null;
  return (
    <div>
      <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 border-blur-lg transition-all">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link href="/" className="flex z-40 font-semibold">
              My-  <span className="text-yellow-400"> 
                 ProductName</span>
            </Link>
            <div className="h-full flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Logout
                  </Link>
                  {isAuthor ? (
                    <>
                      <Link
                        href="/dashboard"
                        className={buttonVariants({
                          size: "sm",
                          variant: "ghost",
                        })}
                      >
                        Dashboard🎯
                      </Link>
                    </>
                  ) : null}
                  <Link
                    href="/blogs"
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}
                  >
                    Explore blogs
                    <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/api/auth/register"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Sign up
                  </Link>
                  <Link
                    href="/api/auth/login"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Sign in
                  </Link>
                  <div
                    className="h-8 w-px bg-zinc-200  
                hidden sm:block"
                  />
                  <Link
                    href="/blogs"
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}
                  >
                    Explore blogs
                    <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </div>
  );
};

export default Navbar;
