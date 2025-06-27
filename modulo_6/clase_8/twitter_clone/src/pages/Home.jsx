import LeftSideBar from "../components/Home/LeftSideBar";
import Content from "../components/Home/Content";
import RightSideBar from "../components/Home/RightSideBar";
import NavBar from "../components/Home/NavBar";

export default function Home() {
    return (
        <div className="main">
            <NavBar>
                <Content />
            </NavBar>
        </div>
    )
}