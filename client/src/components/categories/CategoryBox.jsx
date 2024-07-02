const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3border-b-2 hover:text-neutral-800">
      <Icon />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
