import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

export default function Navigation() {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <CrwnLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        shop
                    </Link>
                    <Link className='nav-link' to="/sign-in">
                        sign in
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
