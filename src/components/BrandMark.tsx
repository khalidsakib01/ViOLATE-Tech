const BrandMark = ({ className = "" }: { className?: string }) => {
  return (
    <img
      src="/violate-tech-logo.svg"
      alt="ViOLATE Tech logo"
      className={className}
    />
  );
};

export default BrandMark;
