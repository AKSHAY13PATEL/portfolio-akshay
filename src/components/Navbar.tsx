const Navbar = () => {
  return (
    <div className="fixed left-1/2 top-2 z-10 flex h-auto w-full max-w-[1215px] -translate-x-1/2 justify-between gap-2 rounded-2xl border-2 border-solid border-darkgray bg-background-default/70 px-6 py-4 text-lg uppercase backdrop-blur-md">
      <div className="text-highlight">About</div>
      <div className="text-primary">Portfolio</div>
      <div className="text-primary">Contact</div>
    </div>
  );
};

export default Navbar;
