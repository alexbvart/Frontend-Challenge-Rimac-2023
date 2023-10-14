
interface CustomCardProps {
    isActive?: boolean;
    onClick?: () => void;
    className?: string; // className es opcional
    children: React.ReactNode;
}

const CustomCard = ({ isActive = false, onClick, children, className }: CustomCardProps) => {

    const classIsActive = isActive ? "border-gray-950 shadow-xl" : "shadow-lg hover:border-gray-400";

    return (
        <div
            onClick={onClick}
            className={` ${classIsActive} w-full  px-6 py-10 pb-10 bg-white rounded-3xl border-2  
            flex-col justify-start items-end inline-flex
            gap-4 ${className}`}>

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

const Footer = ({ className, children }: HeaderProps) => {
    return (
        <footer className={`${className} w-full align-bottom  mt-auto`}>
            {children}
        </footer>
    )
}


CustomCard.Header = Header;
CustomCard.Body = Body;
CustomCard.Footer = Footer;

export default CustomCard