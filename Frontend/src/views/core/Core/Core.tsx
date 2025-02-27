import { CategoryCard, Pagination, Title } from "../components";
import { Card } from "../../partials";

import { useGetPosts } from "../../../hooks/posts/get-posts";
import { PostList } from "../../../models/posts/posts.models";
import { useCategory } from "../../../hooks/category/get-category";

function Index() {
  const { data: Posts } = useGetPosts();
  const { data: Categories } = useCategory();
  console.log(Categories);
  return (
    <>
      <Title title="Trending Articles 🔥" />

      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            {Array.isArray(Posts) &&
              Posts.map((post: PostList) => <Card key={post.id} {...post} />)}
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
              <div className="d-flex flex-wrap gap-3">
                {Array.isArray(Categories) &&
                  Categories.map((category) => (
                    <CategoryCard key={category.id} {...category} />
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
              // <Card key={i} />
              <h1>test</h1>
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Index;
