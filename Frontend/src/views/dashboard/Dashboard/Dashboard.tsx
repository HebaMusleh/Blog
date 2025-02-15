import { statistics } from "../../../constant";
import { Tables } from "../components";
import { Calc, CardBody, WrapperCard } from "./components";

const Dashboard = () => {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="row g-4">
                {statistics.map((statistic) => (
                  <Calc {...statistic} key={statistic.title} />
                ))}
              </div>
            </div>
            <WrapperCard title="Latest Posts" text="posts" classIcon="bi bi-grid-fill text-danger fa-fw">
              {[...Array(3)].map((_, i) => (
                <CardBody
                  key={i}
                  post
                  images="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg"
                />
              ))}
            </WrapperCard>
            
            <WrapperCard title="Recent Comments" text="Comments" classIcon="bi bi-chat-left-quote-fill text-success fa-fw">
              {[...Array(3)].map((_, i) => (
                <CardBody
                  key={i}
                  comment
                />
              ))}
            </WrapperCard>

            <WrapperCard title="Notifications" text="Notifications" classIcon="fa fa-bell text-warning fa-fw">
              {[...Array(3)].map((_, i) => (
                <CardBody
                  key={i}
                  notification
                />
              ))}
            </WrapperCard>
            <Tables />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
