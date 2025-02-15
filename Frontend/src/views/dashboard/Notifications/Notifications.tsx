import { Container } from "../components";
import { Notification } from "./components";

const Notifications = () => {
  return (
    <Container
      title="Notifications"
      description="Manage all your notifications from here"
    >
      <ul className="list-group list-group-flush">
        {[...Array(3)].map((_, i) => (
          <Notification key={i} />
        ))}
      </ul>
    </Container>
  );
};

export default Notifications;
