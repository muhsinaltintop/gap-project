const Button = ({ label, icon, onClick }) => {
  return (
    <button
      className="w-40 inline-flex items-center gap-2 rounded border border-primary bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
      onClick={onClick}
    >
      <span className="text-sm font-medium"> {label} </span>
      {icon && (
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
