export default function Container({ children }) {
  return (
    <div
      className={`
            mx-auto
            max-w-[100%]
            border
            px-4
            sm:px-6
            md:px-10
            lg:px-20
            py-14
        `}
    >
      {children}
    </div>
  );
}

