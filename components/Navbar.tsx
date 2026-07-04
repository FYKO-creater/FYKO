export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-black text-white">
      <h1 className="text-3xl font-bold">FYKO</h1>

      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
