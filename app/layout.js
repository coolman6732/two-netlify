import Header from './components/header';
import Footer from './components/footer';
import "./assets/css/animate.css";
import "./assets/scss/_global.scss";

export const metadata = {
	title: "GameApp",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth'>
			<head>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer></script>
				<script src="/js/masterslider.js" defer></script>
				<script src="/js/classie.js" defer></script>
				<script src="/js/wow.min.js" defer></script>
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html >
	);
}
