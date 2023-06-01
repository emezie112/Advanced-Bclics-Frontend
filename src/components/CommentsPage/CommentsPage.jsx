import { Modal, useMantineTheme } from "@mantine/core";
import "./CommentsPage.css";
import Comments from "../Comments/Comments";

function CommentsPage({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="75%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="comm">
        <Comments />
      </div>
    </Modal>
  );
}

export default CommentsPage;
