import Sidebar from "../components/sidebar/Sidebar"
import Main from "../components/Main"

export const Catalog = () => {
    return (
        <div data-cy="catalogPage" className="flex flex-1 h-full w-full">
            <Sidebar />
            <Main />
        </div>
    )
}