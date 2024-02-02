import Link from "next/link";
import SubmitButton from "../_components/SubmitButton";
import AuthLabel from "../_components/AuthLabel";
import AuthInput from "../_components/AuthInput";
import Image from "next/image";

export const metadata = {
  title: "Login - SalaDinPrima.ro",
  description: "SEO description",
  keywords: "SEO keywords",
};

export default function Login() {
    return (
      <main>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">Logheaza-te</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg bg-white p-4 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="flex flex-col">
                  <AuthLabel>Email</AuthLabel>
                  <AuthInput type="email" placeholder="exemplu@email.com"/>
                </div>
                <div className="flex flex-col">
                  <AuthLabel>Parola</AuthLabel>
                  <AuthInput type="password" placeholder="Parola"/>
                </div>
                <SubmitButton>Intra in cont</SubmitButton>
              </form>
              <div class="py-5">
                <div class="grid grid-cols-3 gap-1">
                    <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Facebook</button>
                    <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
                    <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Apple</button>
                </div>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                    Nu ai un cont ? <Link className="font-semibold leading-6 text-sky-500 hover:text-sky-600" href='/register'>Inregistreaza-te</Link>
                </p>
            </div>
          </div>
      </main>
    );
  }
  