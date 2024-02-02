import Link from "next/link";

export default function NavLink({children, href}) {
    return (
        <Link className="flex w-full items-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 hover:shadow-sm hover:bg-gray-200" href={href}>{children}</Link>
    )
}