const Footer = () => {
  return (
    <div className="card-wrapper card-wrapper-footer flex justify-between">
      <div>Portfolio 2024</div>
      <div className="flex gap-2">
        <span className="text-highlight">Twitter</span>
        <span>Instagram</span>
        <span>LinkedIn</span>
      </div>
      <div className="flex items-center justify-center gap-1 rounded-3xl border-2 border-solid border-[#242424] px-2">
        <svg
          width="9"
          height="10"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.5" cy="4.51221" r="4.5" fill="#E63E21" />
        </svg>
        <span>Avalable for job</span>
      </div>
    </div>
  );
};

export default Footer;
