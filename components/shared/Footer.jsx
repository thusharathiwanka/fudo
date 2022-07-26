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
				<a href="https://facebook.com" target="_blank" rel="noreferrer">
					<UilFacebook size={22} color="#2E2E2E" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noreferrer">
					<UilInstagram size={22} color="#2E2E2E" />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noreferrer">
					<UilTwitter size={22} color="#2E2E2E" />
				</a>
				<a href="https://youtube.com" target="_blank" rel="noreferrer">
					<UilYoutube size={22} color="#2E2E2E" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
