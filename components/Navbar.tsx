import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 mb-4">
      <div className="max-w-4xl mx-auto flex space-x-6 px-4">
        <Link href="/" className="font-bold text-lg hover:underline">FoundrLab</Link>
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/problems" className="hover:underline">Problems</Link>
        <Link href="/validation" className="hover:underline">Validation</Link>
        <Link href="/market" className="hover:underline">Market</Link>
        <Link href="/mvp" className="hover:underline">MVP</Link>
        <Link href="/jtbd" className="hover:underline">JTBD</Link>
      </div>
    </nav>
  );
}