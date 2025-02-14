import { Link } from "react-router-dom";
import { socialLink, tags } from "../../../constant";
import Tags from "../components/Tags";
import { Card } from "../../partials";
import Social from "../../partials/Footer/components/Social";
import { Comment } from "./components";

function Detail() {
  return (
    <>
      <section className=" mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#" className="badge bg-danger mb-2 text-decoration-none">
                <i className="small fw-bold " />
                Lifestyle
              </a>
              <h1 className="text-center">
                10 tell-tale signs you need to get a new startup.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container position-relative" data-sticky-container="">
          <div className="row">
            <div className="col-lg-2">
              <div
                className="text-start text-lg-center mb-5"
                data-sticky=""
                data-margin-top={80}
                data-sticky-for={991}
              >
                <div className="position-relative">
                  <div className="avatar avatar-xl">
                    <img
                      className="avatar-img"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Author.jpg"
                      alt="avatar"
                    />
                  </div>
                  <a
                    href="#"
                    className="h5 fw-bold text-dark text-decoration-none mt-2 mb-0 d-block"
                  >
                    Louis Ferguson
                  </a>
                  <p>Writer at Heba Ayman</p>
                </div>

                <hr className="d-none d-lg-block " />

                <ul className="list-inline list-unstyled">
                  <li className="list-inline-item d-lg-block my-lg-2 text-start">
                    <i className="fas fa-calendar"></i> Nov 15, 2022
                  </li>
                  <li className="list-inline-item d-lg-block my-lg-2 text-start">
                    <i className="fas fa-clock"></i> 5 min read
                  </li>
                  <li className="list-inline-item d-lg-block my-lg-2 text-start">
                    <a href="#" className="text-body">
                      <i className="fas fa-heart me-1" />
                    </a>
                    266 Likes
                  </li>
                  <li className="list-inline-item d-lg-block my-lg-2 text-start">
                    <i className="fas fa-eye" />
                    344 Views
                  </li>
                </ul>
                {/* Tags */}
                <ul className="list-inline text-primary-hover mt-0 mt-lg-3 text-start">
                  {tags.map((tag) => (
                    <Tags tag={tag} />
                  ))}
                </ul>
              </div>
            </div>
            {/* Left sidebar END */}
            {/* Main Content START */}
            <div className="col-lg-10 mb-5">
              <p>
                <b>Moonlight</b> newspaper up its enjoyment agreeable depending.
                Timed voice share led him to widen noisy young. At weddings
                believed laughing although the material does the exercise of. Up
                attempt offered ye civilly so sitting to. She new course gets
                living within Elinor joy. She rapturous suffering concealed.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum est tenetur voluptatibus itaque dolor saepe mollitia et
                ratione odio nisi! Explicabo quod tempore voluptatibus
                perspiciatis, nihil dolorem magni, corrupti odio dignissimos ut
                temporibus laboriosam dolore vero repudiandae asperiores
                incidunt reiciendis corporis odit a maxime. Accusantium
                excepturi ut aliquid accusamus necessitatibus minus odit,
                assumenda rerum. Tempora deserunt officiis expedita, excepturi
                nihil, velit similique necessitatibus natus explicabo veritatis,
                vitae temporibus aliquam dicta ea. Nesciunt et fuga quis atque
                debitis. Vero nihil aperiam voluptatibus. Architecto reiciendis
                necessitatibus explicabo repellendus corrupti pariatur velit
                aperiam! Ad, numquam expedita iste labore tempore necessitatibus
                praesentium libero pariatur.
              </p>
              <p>
                <b>
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum totam quasi impedit nostrum hic consequatur! Tenetur
                    dignissimos debitis ea ut magni laboriosam animi provident
                    ab minima dolorem facilis minus amet culpa quam odio
                    consectetur eos mollitia dolorum cumque at soluta atque nam,
                    quia eaque! Sint quisquam fuga sapiente facilis provident,
                    ullam officia! Alias voluptates officia natus eaque
                    voluptate illum est.
                  </i>
                </b>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis, culpa mollitia nam, ipsum hic dolorum, beatae at quis
                ea cum id temporibus? Asperiores, atque eos voluptatibus
                explicabo cum voluptatum placeat.
              </p>

              <div className="mt-5">
                <h2 className="my-3">
                  <i className="bi bi-symmetry-vertical me-2" />
                  Related post
                </h2>
                <section className="pt-4 pb-0">
                  <div className="container">
                    <div className="row">
                      {[...Array(4)].map((_, i) => (
                        <Card key={i} />
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <hr />
              <div className="d-flex py-4">
                <a href="#">
                  <div className="avatar avatar-xxl me-4">
                    <img
                      className="avatar-img rounded-circle"
                      src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Author.jpg"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      alt="avatar"
                    />
                  </div>
                </a>
                <div>
                  <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="m-0">
                        <a href="#" className="text-dark text-decoration-none">
                          Louis Ferguson
                        </a>
                      </h4>
                      <small>Writer at Desphixs</small>
                    </div>
                  </div>
                  <p className="my-2">
                    Louis Ferguson is a senior editor for the blogzine and also
                    reports on breaking news based in London. He has written
                    about government, criminal justice, and the role of money in
                    politics since 2015.
                  </p>
                  {/* Social icons */}
                  <ul className="nav">
                    {socialLink.map((item, index) => (
                      <Social key={index} {...item} />
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3>3 comments</h3>
                {[...Array(3)].map((_, i) => (
                  <Comment key={i} />
                ))}
              </div>
              {/* Comments END */}
              {/* Reply START */}
              <div className="bg-light p-3 rounded">
                <h3 className="fw-bold">Leave a reply</h3>
                <small>
                  Your email address will not be published. Required fields are
                  marked *
                </small>
                <form className="row g-3 mt-2">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Write Comment *</label>
                    <textarea className="form-control" rows={4} />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Post comment <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
