const Navbar = () => {
  return (
    <div className="flex gap-2 justify-between px-16 text-lg py-5 bg-background-default h-auto w-full border-2 border-solid border-darkgray rounded-full uppercase">
      <div className="text-highlight ">About</div>
      <div className="text-primary ">Portfolio</div>
      <div className="text-primary ">Contact</div>
    </div>
  );
};

export default Navbar;
