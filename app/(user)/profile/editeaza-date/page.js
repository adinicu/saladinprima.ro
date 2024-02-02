import Sidebar from "../../_components/Sidebar";
import ProfileLabel from "../../_components/ProfileLabel";
import ProfileInput from "../../_components/ProfileInput";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export const metadata = {
    title: "Editeaza Date - SalaDinPrima.ro",
    description: "SEO description",
    keywords: "SEO keywords",
}; 

export default function EditeazaDate() {
    return (
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-4">
            <Sidebar/>
            <div className="bg-white w-full rounded-md shadow p-4">
              <div className="border-b py-2">
                <h2 className="text-lg font-semibold leading-7 text-gray-900">Editeaza datele profilului</h2>
              </div>
              <form>
                <div className="flex items-center justify-between gap-x-3 border-b py-2">
                  <div className="flex items-center">
                    <UserCircleIcon className="h-24 w-24 text-gray-500" aria-hidden="true" />
                    <div>
                      <p className="text-lg font-semibold">Avatarul tau</p>
                      <p className="text-xs text-gray-500">PNG sau JPG, nu mai mare de 800px latime.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 hover:text-white">
                      Schimba
                    </button>
                    <button type="button" className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-red-500 shadow-sm ring-1 ring-inset ring-red-400 hover:bg-red-500 hover:text-white">
                      Sterge
                    </button>
                  </div>
                </div>

              </form>
              <form>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-4">
                  <div>
                    <ProfileLabel>Nume</ProfileLabel>
                    <ProfileInput type="text" placeholder="Nume"/>
                  </div>
                  <div>
                    <ProfileLabel>Prenume</ProfileLabel>
                    <ProfileInput type="text" placeholder="Prenume"/>
                  </div>
                  <div>
                    <ProfileLabel>Email</ProfileLabel>
                    <ProfileInput type="email" placeholder="Email"/>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="flex w-full md:w-auto justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600">Editeaza</button>
                </div>
              </form>
            </div>
        </div>
      </main>
    );
  }