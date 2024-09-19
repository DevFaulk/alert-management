import './App.css';
import './Settings';
import defaultSettings from './Settings';

let app =
	(
		<div className="alert-box">
			<div className="box-header">
				<div className="alert-number">1</div>
				<h2>{defaultSettings.appName}</h2>
			</div>
			<div className="alerts">{defaultSettings.appAlerts}</div>
		</div>
	) * defaultSettings.appCount;

let appAlerts = (
	<>
		<a href="https://google.com">Foo Alert</a>
		<a href="https://google.com">Bar Alert</a>
		<a href="https://google.com">Laurel Alert</a>
	</>
);

let page = (
	<>
		<div className="alert-row">
			{app}
			{app}
		</div>
		<div className="alert-row">
			{app}
			{app}
		</div>
		<div className="alert-row">
			{app}
			{app}
		</div>
	</>
);

function App() {
	return (
		<div className="App">
			<body>
				<main>
					<div className="container">{page}</div>
				</main>
			</body>
			<footer>
				<div className="arrows">
					<div className="left-page">Left</div>
					<div className="left-page">
						<button>Customize</button>
					</div>
					<div className="right-page">Right</div>
				</div>
				<div className="credits">
					<div class="footer-left">
						<a href="https://github.com/DevFaulk">
							<img
								class="github-logo"
								src="/images/github-mark.svg"
								alt="github cat logo"
							/>
							<small>Faulk</small>
						</a>
					</div>
					<small>&copy; 2024</small>
				</div>
			</footer>
		</div>
	);
}

export default App;
