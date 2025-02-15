const ContactForm = () => {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2 className="fw-bold">Send us a message</h2>
        <p>
          Please fill in the form below and we will contact you very soon. Your
          email address will not be published.
        </p>
        {/* Form START */}
        <form
          className="contact-form"
          id="contact-form"
          name="contactform"
          method="POST"
        >
          {/* Main form */}
          <div className="row">
            <div className="col-md-6">
              {/* name */}
              <div className="mb-3">
                <input
                  id="con-name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              {/* email */}
              <div className="mb-3">
                <input
                  id="con-email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="col-md-12">
              {/* Subject */}
              <div className="mb-3">
                <input
                  id="con-subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md-12">
              {/* Message */}
              <div className="mb-3">
                <textarea
                  id="con-message"
                  name="message"
                  cols={40}
                  rows={6}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* submit button */}
            <div className="col-md-12 text-start">
              <button className="btn btn-primary w-100" type="submit">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
        {/* Form END */}
      </div>
    </div>
  );
};

export default ContactForm;
