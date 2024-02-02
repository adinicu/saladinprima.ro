"use client"
import NavLink from "./NavLink";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { PowerIcon, TrashIcon, Cog8ToothIcon, KeyIcon, TruckIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import DeleteModal from "../_components/DeleteModal";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const pathname = usePathname();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const nav = [
        { name: 'Editeaza date', href: '/profile/editeaza-date', icon: Cog8ToothIcon, current: pathname === "/profile/editeaza-date" },
        { name: 'Schimba Parola', href: '/profile/schimba-parola', icon: KeyIcon, current: pathname === "/profile/schimba-parola" },
        {
            name: 'Sterge Contul',
            onClick: () => setDeleteModalOpen(true),
            button: true,
            icon: TrashIcon,
        },
        { name: 'Log out', href: '/', icon: PowerIcon, current: pathname === "/" },
    ];

    return (
        <>
            <aside className="bg-white w-80 p-4 rounded-md shadow hidden md:block">
                <p className="uppercase text-xs font-medium tracking-wide text-gray-500">Statistici</p>
                <ul className="my-2">
                    <NavLink href="/"><TruckIcon className="w-4 h-4 mr-2"/>Categoria C</NavLink>
                </ul>
                <p className="uppercase text-xs font-medium tracking-wide text-gray-500">Setari</p>
                <ul className="my-2">
                    {nav.map((item) => (
                            item.button ? (
                                <button
                                    key={item.name}
                                    type="button"
                                    className="flex w-full items-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 hover:shadow-sm hover:bg-gray-200"
                                    onClick={item.onClick}
                                >
                                    <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                                    {item.name}
                                </button>
                            ) : (
                                <NavLink
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600',
                                        'px-3 py-2 text-md font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                                    {item.name}
                                </NavLink>
                            )
                    ))}
                </ul>
            </aside>
            <DeleteModal open={isDeleteModalOpen} setOpen={setDeleteModalOpen} />
            <Disclosure className="sm:hidden" as="nav">
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-md font-medium text-gray-900 hover:text-sky-500">
                <span>Navigheaza</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-sky-500`}
                />
                </Disclosure.Button>
                <Disclosure.Panel className="bg-white mt-1 rounded-md p-2">
                    {nav.map((item) => (
                            item.button ? (
                                <button
                                    key={item.name}
                                    type="button"
                                    className="flex w-full items-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 hover:shadow-sm hover:bg-gray-200"
                                    onClick={item.onClick}
                                >
                                    <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                                    {item.name}
                                </button>
                            ) : (
                                <NavLink
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600',
                                        'px-3 py-2 text-md font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                                    {item.name}
                                </NavLink>
                            )
                    ))}
                </Disclosure.Panel>
            </Disclosure>
        </>
    )
}