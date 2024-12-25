import Header from './components/header';
import Footer from './components/footer';
import "./assets/css/animate.css";
import "./assets/scss/_global.scss";

export const viewport = {
	width: '1580',
	initialScale: -1,
	maximumScale: -1,
	userScalable: true,
};


export const metadata = {
	title: "Hebby",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html >
	);
}
