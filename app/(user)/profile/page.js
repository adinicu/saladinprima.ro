import Sidebar from "../_components/Sidebar";

export const metadata = {
    title: "Profile - SalaDinPrima.ro",
    description: "SEO description",
    keywords: "SEO keywords",
};

export default function Profile() {
    return (
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-4">
            <Sidebar/>
            <div className="bg-white w-full rounded-md shadow p-4">
                container
            </div>
        </div>
      </main>
    );
  }