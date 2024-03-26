import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
    return (
        <div>
            <p>Layout</p>
            <ul>
                <li>
                    <a href="/work">work</a>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}