import './sidebar.css';

function Header(){
    return (
        <header className="header">
        <div className="header__container">

            {/* <a href="#" className="header__logo"></a> */}

            <div className="header__search">
                <input type="search" placeholder="Search" className="header__input" />
                <i className="bx bx-search header__icon"></i>
            </div>

            <div className="header__toggle">
                <i className="bx bx-menu" id="header-toggle"></i>
            </div>
        </div>
    </header>
    );
}
export default Header;