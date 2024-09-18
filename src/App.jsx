import './App.css';

let appOne = (
	<>
		<a href="https://outlook.com">Foo Alert</a>
		<a href="https://outlook.com">Bar Alert</a>
		<a href="https://outlook.com">Laurel Alert</a>
	</>
);

let page = (
	<>
		<div className="alert-row">
			<div className="alert-box left">
				<h2>Outlook</h2>
				<div className="alert-nest">{appOne}</div>
			</div>
			<div className="alert-box right">
				<h2>Moogsoft</h2>
				<div className="alert-nest">{appOne}</div>
			</div>
		</div>
		<div className="alert-row">
			<div className="alert-box left">
				<h2>Real</h2>
				<div className="alert-nest">{appOne}</div>
			</div>
			<div className="alert-box right">
				<h2>Tech Alerts</h2>
				<div className="alert-nest">{appOne}</div>
			</div>
		</div>
		<div className="alert-row">
			<div className="alert-box left">
				<h2>Real</h2>
				<div className="alert-nest">{appOne}</div>
			</div>
			<div className="alert-box right">
				<h2>Tech Alerts</h2>
				<div className="alert-nest">{appOne}</div>
			</div>
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
