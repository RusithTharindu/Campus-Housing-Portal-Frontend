export default function Container({ children }) {
  return (
    <div
      className={`
            mx-auto
            max-w-[2000px]
            border
            px-4
            sm:px-6
            md:px-10
            lg:px-10
        `}
    >
      {children}
    </div>
  );
}

