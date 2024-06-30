import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>Fund Transfers</li>
                    <li>Bill Payments</li>
                    <li>
                        <NavLink to="/profile/user">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;