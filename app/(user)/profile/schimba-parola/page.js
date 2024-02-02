import ProfileInput from "../../_components/ProfileInput";
import ProfileLabel from "../../_components/ProfileLabel";
import Sidebar from "../../_components/Sidebar";

export const metadata = {
    title: "Schimba Parola - SalaDinPrima.ro",
    description: "SEO description",
    keywords: "SEO keywords",
};

export default function SchimbaParola() {
    return (
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-4">
            <Sidebar/>
            <div className="bg-white w-full rounded-md shadow p-4">
              <div className="border-b py-2">
                <h2 className="text-lg font-semibold leading-7 text-gray-900">Schimba Parola</h2>
              </div>
              <form>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-4">
                  <div>
                    <ProfileLabel>Parola Veche</ProfileLabel>
                    <ProfileInput type="password" placeholder="Parola Veche"/>
                  </div>
                  <div>
                    <ProfileLabel>Parola Noua</ProfileLabel>
                    <ProfileInput type="password" placeholder="Parola Noua"/>
                  </div>
                  <div>
                    <ProfileLabel>Confirma Parola Noua</ProfileLabel>
                    <ProfileInput type="password" placeholder="Confirma Parola Noua"/>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="flex w-full md:w-auto justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600">Schimba Parola</button>
                </div>
              </form>
            </div>
        </div>
      </main>
    );
  }