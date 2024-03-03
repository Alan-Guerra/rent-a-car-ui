import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    url: string;
    page: string;
    icon: ReactNode;
}

export default function Logout({ url, page, icon }: LinkProps) {
    return (
        <div className={"bg-red-800 hover:bg-red-600 border-orange-700 text-slate-100 font-bold py-2 px-4 border rounded size-full my-1 text-3xl flex"}>
            <Link to={url}>
                <div className="flex items-center justify-center h-full">
                    <div>{icon}</div>
                    <p className="ml-4">
                        {page}
                    </p>
                </div>
            </Link>
        </div>
    )
}