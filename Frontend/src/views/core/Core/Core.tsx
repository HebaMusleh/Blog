import { CategoryCard, Pagination, Title } from "../components";
import { Card } from "../../partials";

import { useGetPosts } from "../../../hooks/posts/get-posts";

function Index() {
  const {data} = useGetPosts();
  console.log(data);
  return (
    <>
      <Title title="Trending Articles 🔥" />

      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            {[...Array(4)].map((_, i) => (
              <Card key={i} />
            ))}
          </div>
          <Pagination />
        </div>
      </section>

      <section className="bg-light pt-5 pb-5 mb-3 mt-3">
        <div className="container">
          <div className="row g-0">
            <div className="col-12 ">
              <div className="mb-4">
                <h2>Categories</h2>
              </div>
              <div className="d-flex flex-wrap justify-content-between">
                {[...Array(7)].map((_, i) => (
                  <CategoryCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Title title="Latest Articles 🕒" />
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            {[...Array(8)].map((_, i) => (
              <Card key={i} />
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Index;
