interface LinkProps {
    url: string;
    page: string;
    logout: boolean;
}

export default function Link({ url, page, logout }: LinkProps) {
    const handleClick = () => {
        window.location.href = url;
    }

    const buttonStyle = "bg-blue-500 hover:bg-cyan-500 text-slate-100 font-bold py-2 px-4 border border-cyan-700 rounded size-full max-h-24 my-1 text-3xl"
    const logoutStyle = "bg-red-800 hover:bg-red-600 text-slate-100 font-bold py-2 px-4 border border-orange-700 rounded size-full max-h-24 my-1 text-3xl"
    return (
        <button className={logout ? logoutStyle : buttonStyle}
            type="button"
            onClick={handleClick}>
            {page}
        </button>
    )
}