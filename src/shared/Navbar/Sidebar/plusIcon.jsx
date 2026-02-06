
function PlusIcon({ className, condition }) {
  return (
    <>
      {!condition ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${className}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </>
      ) : (
        <>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${className}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </>
      )}
    </>
  );
}

export default PlusIcon;
