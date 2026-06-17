import Link from "next/link";

const Footer = () => (
  <footer className="-translate-y-px bg-white border-t border-border">
    <div className="container">
      <div className="border-x border-border">
        <div className="max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
          <p>
            2026 &copy; Designed by{" "}
            <Link
              href="https://reysin.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Reysin
            </Link>{" "}
            — All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
