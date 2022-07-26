import Header from "../shared/Header";
import Footer from "../shared/Footer";

import style from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
	return (
		<div className={style.container}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
