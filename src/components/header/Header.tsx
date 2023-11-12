import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

interface IHeader {
  background: string;
}

export const NavBar = ({ background }: IHeader) => {
  const navigate = useNavigate();

  return (
    <Header
      key="header_container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: background,
      }}
    >
      <div
        key="header_left"
        style={{
          display: "flex",
          margin: "4px",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 onClick={() => navigate('/')}>Photo Album</h3>
      </div>
      <div
        key="header_right"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "-38px",
          gap: "4px",
        }}
      >
        <Avatar size="default" icon={<UserOutlined />}>
          L
        </Avatar>
        <Button type="text" icon={<LogoutOutlined />} size="middle" />
      </div>
    </Header>
  );
};
