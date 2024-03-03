import Logo from "./Logo"
import Button from "./Button"
import { GrCatalog, GrCar, GrLogout } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { GiCarKey } from "react-icons/gi";
import Logout from "./Logout";

export default function Sidebar() {
    return (
        <div className="bg-blue-800 flex-1 max-w-80 flex flex-col text-center relative">
            <div className="flex py-4 px-10">
                <Logo />
            </div>
            <div className="flex flex-col flex-1 gap-y-2">
                <div>
                    <Button
                        url="/catalog"
                        page="Catalog"
                        icon={<GrCatalog />}
                    />
                </div>
                <div>
                    <Button
                        url="/car"
                        page="Car"
                        icon={<GrCar />}
                    />
                </div>
                <div>
                    <Button
                        url="/rent"
                        page="Rent"
                        icon={<GiCarKey />}
                    />
                </div>
                <div>
                    <Button
                        url="/settings"
                        page="Settings"
                        icon={<IoSettingsOutline />}
                    />
                </div>
            </div>
        </div>
    )
}