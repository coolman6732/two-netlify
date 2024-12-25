'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Lottie from "lottie-react";
import RobotCat2 from "@/public/lottie/robotCat2.json";
import RobotCat from "@/public/lottie/robotCat.json";
import styles from "./assets/css/style.module.css";
import { Yeseva_One, Varela_Round, Baloo_2 } from "next/font/google";

const yesevaOne = Yeseva_One({
	variable: "--font-yeseva-sans",
	subsets: ['latin'],
	weight: '400',
});

const varelaRound = Varela_Round({
	variable: '--font-varela-round',
	subsets: ['latin'],
	weight: '400',
});

const baloo = Baloo_2({
	subsets: ['latin'],
	weight: ['400', '700'],
	style: ['normal'],
});
const loadScript = (src, onLoad) => {
	const script = document.createElement('script');
	script.src = src;
	script.onload = onLoad;
	document.body.appendChild(script);
};

export default function Home() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', () => {

				loadScript('/js/animatescroll.js');

				loadScript('/js/masterslider.js', () => {
					const slider = new MasterSlider();
					slider.setup('masterslider', {
						width: 1680,
						height: 700,
						fullwidth: true,
						autoHeight: true,
						mouse: true,
						view: 'basic',
					});

					loadScript('/js/wow.min.js', () => {
						const wow = new WOW({
							boxClass: 'wow',
							animateClass: 'animated',
							offset: 0,
							mobile: true,
							live: true,
						});
						wow.init();
					});
				});
			});
		}
	}, []);

	return (
		<>
			<div className={styles.banner}>
				<div className={styles.inner}>
					<h2 className={baloo.className}>
						By Gamers <br /> <b> For Gamers</b>
						<p className={baloo.className}>Crafting Immersive Experiences, Igniting Passion Across the Gaming Community</p>
						<Image className={styles.appIcn} src="/images/appIcon.png" alt="appIcon" width={402} height={59} />
					</h2>
					<div className="master-slider ms-skin-default" id="masterslider">
						<div className="ms-slide" data-delay="1">
							<Image
								className="ms-layer"
								data-offset-x="200"
								data-offset-y="-50"
								data-origin="tr"
								data-type="image"
								data-resize="true"
								data-effect="back(1000,true)"
								data-duration="1300"
								data-fixed="true"
								data-delay="600"
								data-parallax="-5"
								data-ease="easeOutQuart"
								src="/images/banIcn2.png"
								alt="banner圖"
								width={289}
								height={351}
								style={{ position: 'absolute' }}
							/>
							<Image
								className="ms-layer"
								data-offset-x="0"
								data-offset-y="0"
								data-origin="tl"
								data-type="image"
								data-resize="true"
								data-effect="back(1000,true)"
								data-duration="1300"
								data-fixed="true"
								data-delay="300"
								data-parallax="4"
								data-ease="easeOutQuart"
								src="/images/banIcn1.png"
								alt="banner圖"
								width={702}
								height={689}
								style={{ position: 'absolute' }}
							/>
						</div>
					</div>
				</div>
			</div>
			<dl>
				<div className={styles.inner}>
					<h3 className={`${baloo.className} ${styles.whiteTitle}`}>Explore   Our Games</h3>
					<p className={`${styles.info} ${styles['info--font--color']}`}>Embark on a strategic journey with Jump On, unwind with the casual charm of Feed the Cat, or plunge into an epic adventure with Ripple Delete. At LaiLai Games, we offer a gaming experience for every mood and moment. Explore our games and discover your next favorite today.</p>
				</div>
				<dd id='JumpOn' className={`${styles.row1} ${styles.ddBg} scroll-target `}>
					<div className={styles.inner}>
						<div className={styles.left}>
							<p className={styles.info}>Adventure</p>
							<h3 className={`${baloo.className} ${styles.title}`}>Jump On</h3>
							<h4 className={styles.info}>Jump On, a strategy game from LaiLai Games, invites you to engage in captivating battles. Master the game, outsmart your opponents, and navigate through exciting challenges in this strategic journey.</h4>
						</div>
						<div className={styles.right}>
							<Lottie
								animationData={RobotCat}
								className={`${styles.people} wow fadeInDown`}
								loop={true}
								data-wow-duration="0.5s"
								data-wow-delay="0.8s"
							/>
							<Image className={`${styles["gameIcn"]} wow fadeInRight`} src="/images/row1IcnBg.png" alt="" width={630} height={403} data-wow-duration="0.7s" data-wow-delay="0s" />
						</div>
					</div>
				</dd>
				<dd id='Cat' className={`${styles.row2} ${styles.ddBg} scroll-target `}>
					<div className={styles.inner}>
						<div className={styles.left}>
							<Lottie
								animationData={RobotCat2}
								className={`${styles.people} wow fadeInDown`}
								loop={true}
								data-wow-duration="0.5s"
								data-wow-delay="0.8s"
							/>
							<Image className={`${styles["gameIcn"]} wow fadeInLeft`} src="/images/row2IcnBg.png" alt="" width={630} height={403} data-wow-duration="0.7s" data-wow-delay="0s" />
						</div>
						<div className={styles.right}>
							<p className={styles.info}>Casual</p>
							<h3 className={`${baloo.className} ${styles.title}`}>Feed the Cat</h3>
							<h4 className={styles.info}>Feed the Cat, a casual game from LaiLai Games, offers a charming and relaxed gaming experience. Unwind with this easy-to-play game, perfect for quick breaks or leisurely play.</h4>
						</div>
					</div>
				</dd>
				<dd id="Ripple" className={`${styles.row3} ${styles.ddBg} scroll-target `}>
					<div className={styles.inner}>
						<div className={styles.left}>
							<p className={styles.info}>Strategy</p>
							<h3 className={`${baloo.className} ${styles.title}`}>Ripple Delete</h3>
							<h4 className={styles.info}>Ripple Delete, an adventure game from LaiLai Games, takes you on a thrilling journey. Explore intriguing worlds, overcome challenges, and immerse yourself in this epic adventure filled with excitement and surprise.</h4>
						</div>
						<div className={styles.right}>
							<Image className={`${styles.people} wow fadeInDown`} src="/images/row3Icn.png" alt="" width={401} height={537} data-wow-duration="0.2s" data-wow-delay="0.8s" />
							<Image className={`${styles["gameIcn"]} wow fadeInRight`} src="/images/row3IcnBg.png" alt="" width={630} height={403} data-wow-duration="0.7s" data-wow-delay="0s" />
						</div>
					</div>
				</dd>
			</dl>
		</>
	);
}
