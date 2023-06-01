import { Modal, useMantineTheme } from "@mantine/core"; 
import "./ProfileModel.css";

function ProfileModal({ modalOpened, setModalOpened }) {
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
      size="85%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="yourInfo">
        <form className="infoForm">
          <h3>Your info</h3>

          <div className="textName">
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            />

            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>
          <div></div>

          <div className="writup">
            <input type="text" className="infoInput" placeholder="Write ups" />
          </div>

          <div className="imG">
            <div>
              Profile Image
              <input type="file" name="profileImg" />
            </div>
            <div>
              Cover Image
              <input type="file" name="coverImg" />
            </div>
            <button className="button infoButton ">Update</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ProfileModal;
