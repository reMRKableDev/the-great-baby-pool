import Link from "next/link";
import type { NextPage } from "next";
import Emoji from "./emoji";

const SiteFooter: NextPage = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <p>
        Made with <Emoji symbol="❤️" label="love" /> by{" "}
        <Link
          href="https://remrkabledev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reMRKable Dev
        </Link>
      </p>
    </footer>
  );
};

export default SiteFooter;
