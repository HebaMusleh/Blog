import { Pagination, Title } from "../components";
import { Card } from "../../partials";

function Category() {
  return (
    <>
      <Title title="Search All Articles" classIcon=" fa-search" input />

      <section className="pt-4 pb-0 mt-4">
        <div className="container">
          <div className="row">
            {[...Array(15)].map((_, i) => (
              <Card key={i} />
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Category;
