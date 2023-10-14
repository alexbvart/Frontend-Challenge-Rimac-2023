import RimacLogo from "../Icons/RimacFooter"

const Footer = () => {
    return (
        <div className="w-full  px-8 md:px-28 py-8 bg-gray-950 flex gap-8 flex-col md:flex-row justify-between items-center  mb-auto">
            <RimacLogo/>
            <div className="text-slate-50 text-sm font-normal ">© 2023 RIMAC Seguros y Reaseguros.</div>
        </div>
    )
}

export default Footer