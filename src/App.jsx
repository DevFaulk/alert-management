import './App.css';

let appOne = (
	<>
		<a href="https://outlook.com">Foo Alert</a>
		<a href="https://outlook.com">Bar Alert</a>
		<a href="https://outlook.com">Laurel Alert</a>
	</>
)

let page = (
	<>
		<div className="alert-box top-left">
			<h2>Outlook</h2>
			<div className="container">
			{appOne}

			</div>
		</div>
		<div className="alert-box top-right"><h2>Moogsoft</h2></div>
		<div className="alert-box bottom-left"><h2>Real</h2></div>
		<div className="alert-box bottom-right"><h2>Tech Alerts</h2></div>
	</>
);

function App() {
	return (
		<div className="App">
			<body>
				<main>
					<div className="container page">{page}</div>
				</main>
			</body>
			<footer>
				<div className="left-page"></div>
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
				<div className="right-page"></div>
			</footer>
		</div>
	);
}

export default App;
