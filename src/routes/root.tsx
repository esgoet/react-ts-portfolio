import { Outlet, Link, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
    return (
        <>
        <NavBar />
      <div id="detail">
        <Outlet />
      </div>
        </>
    )
}

export default Root;