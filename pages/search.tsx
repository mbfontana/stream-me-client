import Head from "next/head";
import styles from "../styles/search.module.scss";
import HeaderAuth from "@/src/components/common/HeaderAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";

const Search = () => {
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const router = useRouter();
  const searchName: any = router.query.name;

  const searchCourses = async () => {
    const res = await courseService.search(searchName);
    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [searchName]);

  return (
    <>
      <Head>
        <title>Stream Me | {searchName}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        {searchResult.map((course) => (
          <div key={course.id}>
            <p>{course.name}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default Search;
