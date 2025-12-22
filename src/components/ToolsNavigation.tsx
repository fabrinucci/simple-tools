import { Link } from "wouter";

export const ToolsNavigation = () => {
  return (
    <nav className="font-semibold grid grid-cols-6 gap-6">
      <Link href="/calculator">Calculator</Link>
      <Link href="percent">Percent</Link>
    </nav>
  );
};
