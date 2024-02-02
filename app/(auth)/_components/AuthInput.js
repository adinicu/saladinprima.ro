export default function AuthInput({type, placeholder}) {
    return (
        <input type={type} placeholder={placeholder} className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400  sm:text-sm sm:leading-6 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
    )
}