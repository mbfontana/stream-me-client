import useSWR from "swr";
import categoryService, { CategoryType } from "@/src/services/categoryService";
import CategorySlides from "../CategorySlides";
import { Container } from "reactstrap";

const CategorySection = () => {
  const { data, error } = useSWR("/categories", categoryService.getAll);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      {data.data.categories.map((category: CategoryType) => (
        <div key={category.id}>
          <CategorySlides id={category.id} name={category.name} />
        </div>
      ))}
    </>
  );
};

export default CategorySection;
