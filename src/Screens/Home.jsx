import logo from "../assets/logo_white.svg"

function Home() {
    return (
			<div className="w-full h-full flex flex-col items-center justify-center bg-black text-white">
				<img className="w-[100px] h-[100px]" src={logo} alt="logo" />
				<h1 className="font-bold text-3xl">BulletLaunch</h1>
			</div>
		);
}

export default Home;