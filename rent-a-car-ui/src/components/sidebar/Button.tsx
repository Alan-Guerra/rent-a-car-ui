import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    url: string;
    page: string;
    icon: ReactNode;
}

export default function Button({ url, page, icon }: LinkProps) {
    return (
        <div className={"bg-blue-500 hover:bg-cyan-500 border-cyan-700 text-slate-100 font-bold py-2 px-4 border rounded size-full my-1 text-3xl flex"}>
            <Link to={url} data-cy={`sidebar-link-${page}`}>
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