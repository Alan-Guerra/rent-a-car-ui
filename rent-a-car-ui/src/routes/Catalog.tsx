import Sidebar from "../components/Sidebar"
import Main from "../components/Main"

export const Catalog = () => {
    return (
        <div className="flex flex-1 h-full w-full ">
            <Sidebar />
            <Main />
        </div>
    )
}