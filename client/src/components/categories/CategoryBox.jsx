

const CategoryBox = ({label,icon}) => {
    return (
        <div>
            <img src={icon} alt="" />
            <h3>{label}</h3>
        </div>
    );
};

export default CategoryBox;