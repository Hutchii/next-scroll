import Link from "next/link";

export default function Navigation() {
  return (
    <header className="spacer">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Hutchii"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
