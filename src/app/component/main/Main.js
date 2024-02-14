import './Main.css';
import {Button, Dropdown} from "antd";

function Main() {

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            ),
        },
    ];
    return (
        <div className="row ">
            <div className="col-md-2 mt-2 mx-3">
                <Dropdown className="d-flex justify-content-center"
                    menu={{
                        items
                    }}
                    placement="bottom"
                    arrow
                >
                    <Button className="w-100 rounded-1 border-secondary">bottom</Button>
                </Dropdown>
            </div>
        </div>
    );
}

export default Main;