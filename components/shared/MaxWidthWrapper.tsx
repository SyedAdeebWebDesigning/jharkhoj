const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="max-w-[9xl] mx-auto md:px-4">{children}</div>;
};

export default MaxWidthWrapper;
