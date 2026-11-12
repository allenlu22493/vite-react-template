import "./App.css";

const services = [
	{
		number: "01",
		title: "古易姓名學",
		label: "首波服務",
		description:
			從漢字字形、字義與傳統姓名學觀點出發，陪你重新認識名字裡的文化意涵與祝福。",
		status: "即將推出",
		className: "service-card--featured",
	},
	{
		number: "02",
		title: "姓名學知陽宅",
		label: "規劃中",
		description:
			探索姓名學與居家生活的連結，將傳統觀點轉化為更貼近日常的參考工具。",
		status: "工具陸續增加中",
		className: "",
	},
];

function App() {
	return (
		<div className="site-shell">
			<header className="site-header">
				<a className="brand" href="#home" aria-label="漢字姓名的命理首頁">
					<span className="brand-seal" aria-hidden="true">名</span>
					<span className="brand-name">漢字姓名的命理</span>
				</a>
				<nav className="main-nav" aria-label="主選單">
					<a href="#about">理念</a>
					<a href="#services">服務工具</a>
					<a className="nav-cta" href="#services">探索服務 <span aria-hidden="true">↗</span></a>
				</nav>
			</header>

			<main>
				<section className="hero" id="home">
					<div className="hero-copy">
						<p className="eyebrow"><span />漢字之美・姓名之意</p>
						<h1>一字一名，<br /><em>都是人生的印記。</em></h1>
						<p className="hero-description">
							以漢字文化為起點，認識姓名承載的意涵與祝福。從傳統姓名學到生活應用，為你逐步整理好懂、實用的探索工具。
						</p>
						<a className="primary-button" href="#services">認識服務 <span aria-hidden="true">→</span></a>
						<p className="hero-note">傳統文化的當代閱讀，工具與內容將陸續推出。</p>
					</div>
					<div className="hero-art" aria-label="漢字與印章風格的裝飾圖像" role="img">
						<div className="sun-disc" />
						<div className="art-ring art-ring--outer" />
						<div className="art-ring art-ring--inner" />
						<div className="art-character">名</div>
						<div className="art-caption">形・音・義</div>
						<div className="art-stamp">漢字<br />文化</div>
						<span className="art-dot art-dot--one" />
						<span className="art-dot art-dot--two" />
					</div>
					<div className="hero-index" aria-hidden="true">01 <span /> 03</div>
				</section>

				<section className="intro-strip" id="about">
					<p className="intro-label">我們相信</p>
					<p>名字不只是稱呼，也是漢字文化與個人故事交會的地方。</p>
					<span className="intro-mark" aria-hidden="true">✳</span>
				</section>

				<section className="services-section" id="services">
					<div className="section-heading">
						<div>
							<p className="eyebrow"><span />探索服務</p>
							<h2>從姓名出發，<em>慢慢認識。</em></h2>
						</div>
						<p className="section-description">我們正逐步打造易懂、貼近日常的姓名文化工具，敬請期待。</p>
					</div>
					<div className="service-grid">
						{services.map((service) => (
							<article className={`service-card ${service.className}`} key={service.number}>
								<div className="service-card-top">
									<span className="service-number">{service.number}</span>
									<span className="service-label">{service.label}</span>
								</div>
								<div className="service-icon" aria-hidden="true">{service.number === "01" ? "字" : "居"}</div>
								<h3>{service.title}</h3>
								<p>{service.description}</p>
								<div className="service-card-bottom">
									<span>{service.status}</span>
									<span className="service-arrow" aria-hidden="true">↗</span>
								</div>
							</article>
						))}
					</div>
					<p className="coming-note"><span aria-hidden="true">✳</span> 更多姓名學工具與內容，將陸續增加。</p>
				</section>

				<section className="closing-banner">
					<p className="eyebrow"><span />從一個名字開始</p>
					<h2>探索漢字裡，<em>屬於你的故事。</em></h2>
					<a href="#services" className="text-link">看看服務規劃 <span aria-hidden="true">→</span></a>
				</section>
			</main>

			<footer className="site-footer">
				<a className="brand footer-brand" href="#home">
					<span className="brand-seal" aria-hidden="true">名</span>
					<span className="brand-name">漢字姓名的命理</span>
				</a>
				<p>姓名學內容屬傳統文化觀點與個人探索參考，並非科學預測或專業建議。</p>
				<span className="copyright">© {new Date().getFullYear()} 漢字姓名的命理</span>
			</footer>
		</div>
	);
}

export default App;
