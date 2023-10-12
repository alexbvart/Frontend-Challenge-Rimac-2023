
interface CustomCardProps {
    isActive?: boolean;
    onClick: () => void;
    className?: string; // className es opcional
    children: React.ReactNode;
}

const CustomCard = ({ isActive = false, onClick, children }: CustomCardProps) => {

    const classIsActive = isActive ? "border-gray-950 shadow-xl" : "shadow-lg hover:border-gray-400";

    return (
        <div
            onClick={onClick}
            className={` ${classIsActive} w-full  px-6 py-10 pb-10 bg-white rounded-3xl border-2  
            flex-col justify-start items-end inline-flex
            px-6 py-10 gap-4`}>

            {children}

        </div>
    )
}


interface HeaderProps {
    className?: string;
    children: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
    return (
        <header className={`${className} w-full `}>
            {children}
        </header>
    )
}
const Body = ({ className, children }: HeaderProps) => {
    return (
        <header className={`${className} w-full `}>
            {children}
        </header>
    )
}


CustomCard.Header = Header;
CustomCard.Body = Body;

export default CustomCard