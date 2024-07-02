import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    return (
        <div>
            <Container>
            {categories.map(category => <CategoryBox key={category.label} label={category.label} icon={category.icon}></CategoryBox> )}

            </Container>
        </div>
    );
};

export default Categories;