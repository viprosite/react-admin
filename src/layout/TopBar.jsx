import {
    BellOutlined,
    UserOutlined,
    DownOutlined
} from '@ant-design/icons'

import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        label: (
            <div className='baseInfo'>
                <UserOutlined />
                <span>管理员</span>
                <span>工号: 2023</span>
            </div>
        ),
    },
    {
        type: 'divider',
    },
    {
        key: '2',
        label: '个人信息',
        // icon: <SmileOutlined />,
        // disabled: true,
    },
    {
        key: '3',
        label: '修改密码',
    },
    {
        key: '4',
        // danger: true,
        label: '退出登陆',
    },
];

export default function TopBar() {
    return (
        <div className="topBar__container">
            <div className="left"></div>
            <div className="right">
                <BellOutlined />
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <Space>
                        <UserOutlined />
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </div>
        </div>
    )
}