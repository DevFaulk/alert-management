import './App.css';

function handleModal() {
	const dialogRef = useRef < HTMLDialogElement > null;

	useLayoutEffect(() => {
		if (dialogRef.current?.open && !showModal.show) {
			dialogRef.current?.close();
		} else if (!dialogRef.current?.open && showModal.show) {
			dialogRef.current?.showModal();
		}
	}, [showModal.show]);

	return <dialog ref={dialogRef}>...</dialog>;
}

let appOne = (
	<>
		<a href="https://google.com">Foo Alert</a>
		<a href="https://google.com">Bar Alert</a>
		<a href="https://google.com">Laurel Alert</a>
	</>
);

let page = (
	<>
		<div className="alert-row">
			<div className="alert-box left">
				<div className="box-header">
					<div className="alert-number">1</div>
					<h2>Outlook</h2>
				</div>
				<div className="alert-nest">{appOne}</div>
			</div>
			<div className="alert-box right">
				<div className="box-header">
					<div className="alert-number">1</div>
					<h2>Moog</h2>
				</div>
				<div className="alert-nest">{appOne}</div>
			</div>
		</div>
		<div className="alert-row">
			<div className="alert-box left">
				<div className="box-header">
					<div className="alert-number">1</div>
					<h2>Outlook</h2>
				</div>
				<div className="alert-nest">{appOne}</div>
			</div>
			<div className="alert-box right">
				<div className="box-header">
					<div className="alert-number">1</div>
					<h2>Tech Alerts</h2>
				</div>
				<div className="alert-nest">{appOne}</div>
			</div>
		</div>
		<div className="alert-row">
			<div className="alert-box left">
				<div className="box-header">
					<div className="alert-number">1</div>
					<h2>IDIP</h2>
				</div>
				<div className="alert-nest">{appOne}</div>
			</div>
			<div className="alert-box right">
				<div className="box-header">
					<div className="alert-number">1</div>
					<h2>REAL</h2>
				</div>
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
					<div className="left-page">
						<button onClick={handleModal}>Customize</button>
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
