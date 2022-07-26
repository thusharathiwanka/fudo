import Image from "next/image";
import { UilFacebook, UilInstagram, UilTwitter, UilYoutube } from "@iconscout/react-unicons";

import style from "../../styles/Footer.module.css";
import headerStyle from "../../styles/Header.module.css";

import Logo from "../../assets/logo.png";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={headerStyle.logo}>
				<Image src={Logo} alt="logo" width={50} height={50} />
				<span>Fudo</span>
			</div>
			<p className={headerStyle.copyright}>All Rights Reserved &copy;</p>
			<div className={style.social}>
				<UilFacebook size={25} color="#2E2E2E" />
				<UilInstagram size={25} color="#2E2E2E" />
				<UilTwitter size={25} color="#2E2E2E" />
				<UilYoutube size={25} color="#2E2E2E" />
			</div>
		</div>
	);
};

export default Footer;
