import { info } from "../../../constant";
import { ContactForm, Information, Map } from "./components";

function Contact() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto text-center">
              <h1 className="fw-bold">Contact us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <Map />
              <div className="row mt-5">
                {info.map((information) => (
                  <Information {...information} key={information.title} />
                ))}
              </div>
              <hr className="my-5" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
