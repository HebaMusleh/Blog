import { Card } from "../../partials";
import { Pagination, Title } from "../components";

function Category() {
  return (
    <>
      <Title title="LifeStyle (16 Articles)" classIcon="bi-grid-fill" />
      <section className="pt-4 pb-0 mt-4">
        <div className="container">
          <div className="row">
            {[...Array(16)].map((_, i) => (
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
