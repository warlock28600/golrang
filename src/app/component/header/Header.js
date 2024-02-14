import './Header.css';
import Main from "../main/Main";

function Header() {
    return (
        <div className="main_body">
            <div className="main_navbar">
                <div className="navbar_baner">
                    <span>
                        تست گلرنگ
                    </span>
                </div>
            </div>
            <div className="main_container">
                    <Main></Main>
            </div>
        </div>
    );

}


export default Header;
