import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CourseType } from "@/src/services/courseService";
import SlideCard from "../SlideCard";

interface props {
  courses: CourseType[];
}

const Slides = ({ courses }: props) => {
  let slideCount = 0;

  if (courses.length > 4) {
    slideCount = 4;
  } else if (courses) {
    slideCount = courses.length;
  }

  return (
    <div className="d-flex flex-column aling-items-center py-4">
      <Splide
        options={{
          type: "loop",
          perPage: slideCount,
          perMove: 1,
          pagination: false,
          width: slideCount * 300,
          arrows: courses.length > 4 ? true : false,
          drag: courses.length > 4 ? true : false,
          breakpoints: {
            1200: {
              perPage: slideCount >= 3 ? 3 : slideCount,
              arrows: slideCount > 3 ? true : false,
              drag: slideCount > 3 ? true : false,
              width: slideCount >= 3 ? 900 : 600,
            },
            900: {
              perPage: slideCount >= 2 ? 2 : slideCount,
              arrows: slideCount > 2 ? true : false,
              drag: slideCount > 2 ? true : false,
              width: 600,
            },
            600: {
              perPage: 1,
              arrows: slideCount > 1 ? true : false,
              drag: slideCount > 1 ? true : false,
              width: 280,
            },
          },
        }}
      >
        {courses.map((course) => (
          <SplideSlide key={course.id}>
            <SlideCard course={course} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slides;
