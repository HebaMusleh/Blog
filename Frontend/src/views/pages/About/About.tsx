import { services, teamMembers } from "../../../constant";
import { Service, Team, Title } from "./components";

const About = () => {
  return (
    <section className="pt-4 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            {" "}
            <Title title="Our story" />
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              possimus suscipit porro dignissimos quae hic doloribus deleniti
              voluptatibus in totam quasi quos omnis maiores, nam sint! In
              laborum architecto natus magnam sunt quasi neque aperiam, enim
              commodi totam nam nostrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur necessitatibus, sapiente facere harum molestiae, quas
              aperiam nulla eius, cupiditate deserunt accusantium magni!
              Necessitatibus saepe cupiditate facilis, sint est quod hic maxime
              aliquam, et impedit optio nihil, magnam libero ipsa quia expedita
              possimus. Unde corrupti asperiores, facilis dolorum ea doloremque
              sunt suscipit cupiditate officiis deleniti neque fuga eos rerum
              nulla aperiam incidunt praesentium quae tenetur officia fugiat
              magnam architecto, maiores est corporis. Autem possimus maiores
              nam hic tempora, impedit nemo a ad quidem? Voluptates, similique
              ut molestiae suscipit fugiat labore laudantium saepe incidunt
              facere. Vitae cupiditate ipsum et sed quia earum, consequatur
              atque quos dolore sunt beatae dolorum harum error aperiam dolores
              a ab eveniet animi. Doloribus minus quod aperiam maiores ex nulla
              eius perferendis inventore libero, sint dolore incidunt cupiditate
              excepturi omnis id eaque sit nemo vitae, in dolor molestias velit!
              In, aliquam! Possimus eum blanditiis hic enim illo quasi quod.
              Incidunt, esse? Molestiae optio sed quaerat minus, magnam eius
              accusamus odit nam nulla porro similique itaque sit, alias qui
              odio cupiditate totam laboriosam eos ratione minima. Amet sed
              alias nobis, soluta molestiae, suscipit possimus doloremque quod
              omnis delectus velit dolore repudiandae et iure exercitationem
              odio quia quae temporibus minus!
            </p>
            <Title title="We do this across:" />
            <ul>
              <li>
                A pleasure exertion if believed provided to. All led out world
                this music while asked. Paid mind even sons does he door no.
                Attended overcame repeated it is perceived Marianne in.
              </li>
              <li>
                Warrant private blushes removed an in equally totally if.
                Delivered dejection necessary objection do Mr prevailed. Mr
                feeling does chiefly cordial in do.
              </li>
              <li>
                Mr feeling does chiefly cordial in do.{" "}
                <a href="#">
                  <u>Water timed folly right aware if oh truth.</u>
                </a>{" "}
                Imprudence attachment him his for sympathize. Large above be to
                means.
              </li>
              <li>
                Dashwood does provide stronger is. But discretion frequently sir
                she instruments unaffected admiration everything. Meant balls it
                if up doubt small purse.
              </li>
            </ul>
            <Title title="Our Team" />
            <div className="row g-4">
              {teamMembers.map((member) => (
                <Team {...member} key={member.name} />
              ))}
            </div>
            <Title title="What we do ? " />
            <div className="row">
              {services.map((service) => (
                <Service {...service} key={service.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
