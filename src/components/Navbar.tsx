const Navbar = () => {
  return (
    <div className="flex h-auto w-full justify-between gap-2 rounded-full border-2 border-solid border-darkgray bg-background-default px-16 py-5 text-lg uppercase">
      <div className="text-highlight">About</div>
      <div className="text-primary">Portfolio</div>
      <div className="text-primary">Contact</div>
    </div>
  );
};

export default Navbar;
