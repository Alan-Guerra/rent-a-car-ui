import Logo from "./Logo"

export default function Sidebar() {
    return (
        <div className="bg-blue-800 flex-1 max-w-80">
            <div className="flex py-4 px-10">
                <Logo />
            </div>
        </div>
    )
}