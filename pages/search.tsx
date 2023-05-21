import Head from "next/head";
import styles from "../styles/search.module.scss";
import HeaderAuth from "@/src/components/common/HeaderAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/src/services/courseService";
import SearchCard from "@/src/components/SearchCard";
import { Container } from "reactstrap";
import Footer from "@/src/components/common/Footer";

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
      <main className={styles.main}>
        <div className={styles.headerFooterBg}>
          <HeaderAuth />
        </div>
        {searchResult.length > 0 ? (
          <div className={styles.searchResults}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-5">
              {searchResult.map((course) => (
                <SearchCard key={course.id} course={course} />
              ))}
            </Container>
          </div>
        ) : (
          <p className={styles.notFoundText}>Not Found</p>
        )}
        <div className={styles.headerFooterBg}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
