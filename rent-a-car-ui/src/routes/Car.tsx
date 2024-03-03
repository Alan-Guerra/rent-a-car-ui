import Main from "../components/Main"
import Sidebar from "../components/sidebar/Sidebar"

export const Car = () => {
    return (
        <div className="flex flex-1 h-full w-full ">
            <Sidebar />
            <Main />
        </div>
    )
}