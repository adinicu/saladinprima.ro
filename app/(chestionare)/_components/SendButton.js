export default function SendButton ({children, onClick, disabled}) {
    return (
        <button className="py-3 px-6 font-semibold bg-green-600 hover:bg-green-800 text-white rounded-lg disabled:bg-gray-500" 
                  onClick={onClick} 
                  disabled={disabled}
        >{children}</button>
    )
}