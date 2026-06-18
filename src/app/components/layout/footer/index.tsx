import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border/40">
    <div className="container">
      <div className="max-w-5xl mx-auto px-4 sm:px-7 py-6">
        <p className="text-xs text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} — Built by{" "}
          <Link
            href="https://reysin.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-200"
          >
            Reysin
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
