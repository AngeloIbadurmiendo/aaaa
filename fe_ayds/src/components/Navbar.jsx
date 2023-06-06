const Navbar = () => {
  return (
    <div className="flex h-20 bg-black shadow">
      <div className="w-11/12 m-auto">
        <nav className="flex text-white justify-between items-center mx-10">
          <p className="cursor-pointer">APP</p>
          <p className="cursor-pointer">login</p>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
