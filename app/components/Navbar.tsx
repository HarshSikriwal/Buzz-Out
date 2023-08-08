function Navbar() {
  let path = "M 0 0 V 80 M 0 80 c 80 -40 80 40 160 0 ";

  function createPath(path: string) {
    for (let i = 3; i < 3000 / 80 + 1; i += 2) {
      path += `S ${i * 80} 120 ${i * 80 + 80} 80 `;
    }
    return path;
  }

  path = createPath(path) + "v -80 H 0";

  return (
    <nav className="relative mb-10">
      <svg
        className="fill-purple-700"
        width="100%"
        height="120"
        strokeWidth="5"
      >
        <path d={path} />
      </svg>
      <div className="absolute top-0 left-0 z-10">
        <header className="">
          <h1 className="text-white">I Don'd Know Whad do do</h1>
        </header>
      </div>
    </nav>
  );
}

export default Navbar;
