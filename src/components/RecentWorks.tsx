const RecentWorks = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-start gap-2">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="4.51221" r="4.5" fill="#C0C0C0" />
        </svg>
        <span className="text-2xl text-secondary">Recent Work</span>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <div>
            <div className="text-xl font-medium text-highlight">
              Frontend Developer
            </div>
            <div className="text-lg font-normal text-secondary">
              Jul 2024 - Present
            </div>
          </div>
          <span className="text-lg font-normal text-secondary">
            Lucent Innovation
          </span>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-xl font-medium">Frontend Developer</div>
            <div className="text-lg font-normal text-secondary">
              Aug 2023 - July 2024
            </div>
          </div>
          <span className="text-lg font-normal text-secondary">Truts</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-xl font-medium">Backend Developer</div>
            <div className="text-lg font-normal text-secondary">
              Feb 2023 - Aug 2023
            </div>
          </div>
          <span className="text-lg font-normal text-secondary">Truts</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RecentWorks;
