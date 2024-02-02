export default function Footer() {
    return (
        <footer className="sticky top-[100vh] border-t bg-white shadow-sm">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <ul className="flex flex-wrap justify-center gap-4 items-center mb-6 text-[12px] font-medium text-gray-500">
                    <li>
                        <a href="#" className="hover:underline">Despre noi</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Termenii si conditiile</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Politica de confidentialitate</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Politica Cookie</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>

                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="https://saladinprima.ro" className="hover:underline">SalaDinPrima™</a>. Toate drepturile rezervate.</span>
            </div>
        </footer>
    )
}