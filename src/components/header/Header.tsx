import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Layout } from "antd";

const { Header } = Layout;

interface IHeader {
    background: string;
}

export const NavBar = ({ background }: IHeader) => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center', background: background, flexWrap:'wrap', flexDirection: 'row-reverse' }}>
            <Flex gap={10} vertical={false} wrap='wrap' justify='flex-end'>
                <Avatar
                    size="default"
                    icon={<UserOutlined />}
                >
                    L
                </Avatar>
                <Button type="text" icon={<LogoutOutlined />} size='middle' />
            </Flex>
        </Header>
    )
}