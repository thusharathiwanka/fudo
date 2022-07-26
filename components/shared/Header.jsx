import Image from "next/image";
import { UilShoppingBag } from "@iconscout/react-unicons";

import style from "../../styles/Header.module.css";

import Logo from "../../assets/logo.png";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<Image src={Logo} alt="logo" width={50} height={50} />
				<span>Fudo</span>
			</div>
			<ul className={style.nav}>
				<li>Home</li>
				<li>Menu</li>
				<li>Contact</li>
			</ul>
			<div className={style.cartWrapper}>
				<div className={style.cart}>
					<UilShoppingBag size={30} color="#2E2E2E" />
					<div className={style.badge}>0</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
