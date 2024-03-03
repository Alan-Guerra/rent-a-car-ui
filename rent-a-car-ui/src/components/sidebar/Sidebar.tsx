import Logo from "./Logo"
import Link from "./Link"

export default function Sidebar() {
    return (
        <div className="bg-blue-800 flex-1 max-w-80 flex-col text-center relative">
            <div className="flex py-4 px-10">
                <Logo />
            </div>
            <div>
                <Link
                    url="http://127.0.0.1:5173/catalog"
                    page="Catalog"
                    logout={false} />
            </div>
            <div>
                <Link
                    url="http://127.0.0.1:5173/car"
                    page="Car"
                    logout={false} />
            </div>
            <div>
                <Link
                    url="http://127.0.0.1:5173/rent"
                    page="Rent"
                    logout={false} />
            </div>
            <div>
                <Link
                    url="http://127.0.0.1:5173/settings"
                    page="Settings"
                    logout={false} />
            </div>
            <div className="absolute bottom-5 w-full">
                <Link
                    url="logout"
                    page="Logout"
                    logout={true}/>
            </div>
        </div>
    )
}