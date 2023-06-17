import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function BasicButtonExample() {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      style={{ color: "red" }}
      title="..."
    >
      <Dropdown.Item href="#/action-1">Notification</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Hashtag</Dropdown.Item>
      <Dropdown.Item href="#/action-3">
        <b>Advertise</b>
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;
