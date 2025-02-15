import { Container } from "../components";
import { Comment } from "./components";

const Comments = () => {
  return (
    <Container
      title="Comments"
      description="You have full control to manage your own comments."
    >
      <ul className="list-group list-group-flush">
        <Comment />
      </ul>
    </Container>
  );
};

export default Comments;
