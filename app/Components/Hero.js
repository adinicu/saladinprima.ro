export default function Hero() {
  return (
    <div className="bg-white">
        <div className="flex flex-col md:flex-row justify-between py-10 max-w-7xl mx-auto">
            <div className="basis-1/2 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Chestionare Auto DRPCIV
                </h1>
                <p className="mt-6 text-md leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/chestionare-drpciv" className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                    Genereaza Chestionar
                </a>
                <a href="/mediu-de-invatare" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
                    Invata Acum <span aria-hidden="true">→</span>
                </a>
                </div>
            </div>
            <div className="basis-1/2">
                2
            </div>
        </div>
    </div>
  );
}
