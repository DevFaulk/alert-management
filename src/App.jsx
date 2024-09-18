import './App.css';

function App() {
	return (
		<div className="App">
			<body>
				<main>
					<div className="container page">
						{page}
						<div className="alert-box top-left">
							{appOne}
							<h2>Pick your journey...</h2>
						</div>
						<div className="alert-box top-right">{appTwo}</div>
						<div className="alert-box bottom-left">{appThree}</div>
						<div className="alert-box bottom-right">{appFour}</div>
					</div>
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
				<small>&copy; 2023</small>
				<div className="right-page"></div>
			</footer>
		</div>
	);
}

export default App;
