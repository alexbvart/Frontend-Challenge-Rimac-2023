import { Navbar as NUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import RimacSVG from "../Icons/Rimac";
import { Link } from "react-router-dom";
import Phone from "../Icons/Phone";
import { memo } from "react";
import Typography from "../Typography";

const NavbarComponent = () => {
    return (
        <NUINavbar className='flex w-full shrink m-auto'>
            <NavbarBrand>
                <Link to="/">
                    <RimacSVG />
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem className="flex gap-4">
                    <Typography direction="horizontal" className="items-center" >
                        <Typography.Small className="font-semibold text-gray-950 hidden lg:inline">
                            ¡Compra por este medio!
                        </Typography.Small>
                        <Phone />
                        <Typography.Base className="inline">(01) 411 6001</Typography.Base>
                    </Typography>
                </NavbarItem>
            </NavbarContent>
        </NUINavbar>
    )
}

const Navbar = memo(NavbarComponent)
export default Navbar