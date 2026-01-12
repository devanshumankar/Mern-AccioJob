function Session(sessionName, studyDuration, breakDuration, cycle) {
	this.sessionName = sessionName;
	this.studyDuration = studyDuration;
	this.breakDuration = breakDuration;
	this.cycle = cycle;
}
let historyDetails = JSON.parse(localStorage.getItem("historyDetails")) || [];
const htmlElements = {
	form: document.querySelector("#session-form"),

	quotes: document.querySelector(".quotes"),

	sessionNameEle: document.querySelector("#session-name"),

	sessionNameError: document.querySelector("#session-name-error"),

	sessiondurationEle: document.querySelector("#duration"),

	durationError: document.querySelector("#duration-error"),

	breakEle: document.querySelector("#breaks"),

	breakError: document.querySelector("#break-error"),

	cycleEle: document.querySelector("#cycle"),

	cycleError: document.querySelector("#cycle-error"),

	startSessionButton: document.querySelector("button"),

	dashboard: document.querySelector(".dashboard"),

	loadingEle: document.querySelector("#loading"),

	pauseButton: document.querySelector("#pause"),

	resumeButton: document.querySelector("#resume"),

	totalTimeEle: document.querySelector("#total-time"),

	currentPhaseEle: document.querySelector("#current-phase"),

	currentPhaseTimeEle: document.querySelector("#current-phase-time"),

	dashboardCycleEle: document.querySelector("#dashboard-cycle"),

	historyContainer: document.querySelector(".history-container"),

	table: document.querySelector("table"),

	showHistoryBtn: document.querySelector("#show-history"),
};

let nameFlag = false;
let durationFlag = false;
let breakFlag = false;
let cycleFlag = false;
let isPaused = false;
function buttonEnable() {
	if (cycleFlag && nameFlag && durationFlag && breakFlag) {
		htmlElements.startSessionButton.disabled = false;
	}
}
htmlElements.sessionNameEle.addEventListener("input", (e) => {
	if (!e.target.value) {
		htmlElements.sessionNameError.textContent = "Session Name Required";
	} else if (e.target.value.length < 3) {
		htmlElements.sessionNameError.textContent = "Min 3 char required";
	} else {
		htmlElements.sessionNameError.textContent = "";
		nameFlag = true;
	}
	buttonEnable();
});

htmlElements.sessiondurationEle.addEventListener("input", (e) => {
	if (!e.target.value) {
		htmlElements.durationError.textContent = "duration required";
	} else if (Number(e.target.value) < 0) {
		htmlElements.durationError.textContent = "Minimum 5min  required";
	} else {
		htmlElements.durationError.textContent = "";
		durationFlag = true;
	}
	buttonEnable();
});

htmlElements.breakEle.addEventListener("input", (e) => {
	if (!e.target.value) {
		htmlElements.breakError.textContent = "break required";
	} else if (Number(e.target.value) < 0) {
		htmlElements.breakError.textContent = "Minimum 2min  required";
	} else {
		htmlElements.breakError.textContent = "";
		breakFlag = true;
	}
	buttonEnable();
});

htmlElements.cycleEle.addEventListener("input", (e) => {
	if (!e.target.value) {
		htmlElements.cycleError.textContent = "cycles required";
	} else if (Number(e.target.value) < 1) {
		htmlElements.cycleError.textContent = "Min 1 cycle required";
	} else {
		htmlElements.cycleError.textContent = "";
		cycleFlag = true;
	}
	buttonEnable();
});
const appDetails = {
	sessionDetails: null,
	timerId: null,
	session: null,
	totalSeconds: null,
	phaseSeconds: null,
	currentSession: "study",
	currentCycle: 1,
};
window.addEventListener("load", () => {
	appDetails.sessionDetails = JSON.parse(localStorage.getItem("runningSession"));

	appDetails.timerId = null;

	const state = localStorage.getItem("state");
	isPaused = state === "pause";

	if (appDetails.sessionDetails) {
		appDetails.session = new Session(
			appDetails.sessionDetails.sessionName,
			appDetails.sessionDetails.studyDuration,
			appDetails.sessionDetails.breakDuration,
			appDetails.sessionDetails.cycle
		);
		appDetails.phaseSeconds = appDetails.sessionDetails.phaseSecondsLeft;
		appDetails.totalSeconds = appDetails.sessionDetails.totalSecondsLeft;
		appDetails.currentSession = appDetails.sessionDetails.currentSession;
		appDetails.currentCycle = appDetails.sessionDetails.currentRunningCycle;
		if (appDetails.currentSession == "study") {
			htmlElements.quotes.style.display = "flex";
			showQuotes();
		}
		showDashboard(state);
	} else {
		showForm();
	}
});

function showQuotes() {
	fetch("http://localhost:3000")
		.then((res) => res.text())
		.then((res) => {
			htmlElements.quotes.textContent = res;
		})
		.catch((err) => {
			htmlElements.quotes.textContent = err;
		})
		.finally(() => {
			htmlElements.loadingEle.style.display = "none";
		});
}
htmlElements.startSessionButton.addEventListener("click", (e) => {
	e.preventDefault();
	htmlElements.quotes.style.display = "flex";
	showQuotes();

	appDetails.session = new Session(
		htmlElements.sessionNameEle.value,
		htmlElements.sessiondurationEle.value,
		htmlElements.breakEle.value,
		htmlElements.cycleEle.value
	);

	htmlElements.form.style.display = "none";
	htmlElements.dashboard.style.display = "flex";

	appDetails.totalSeconds =
		((Number(appDetails.session.studyDuration) +
			Number(appDetails.session.breakDuration)) *
			Number(appDetails.session.cycle) -
			Number(appDetails.session.breakDuration)) *
		60;
	appDetails.phaseSeconds = Number(appDetails.session.studyDuration) * 60;
	historyDetails.push(appDetails.session);
	localStorage.setItem("historyDetails", JSON.stringify(historyDetails));
	localStorage.setItem("session", JSON.stringify(appDetails.session));
	localStorage.setItem("state", "resume");
	isPaused = false;
	showDashboard("resume");
});
htmlElements.historyContainer.style.display = "none";
htmlElements.quotes.style.display = "none";
htmlElements.pauseButton.addEventListener("click", () => {
	clearInterval(appDetails.timerId);
	appDetails.timerId = null;
	isPaused = true;
	localStorage.setItem("state", "pause");

	const tempSession = JSON.parse(localStorage.getItem("runningSession"));
	if (tempSession) {
		tempSession.totalSecondsLeft = appDetails.totalSeconds;
		tempSession.phaseSecondsLeft = appDetails.phaseSeconds;
		localStorage.setItem("runningSession", JSON.stringify(tempSession));
	}
});

htmlElements.resumeButton.addEventListener("click", () => {
	if (!isPaused) return;

	isPaused = false;
	localStorage.setItem("state", "resume");
	startTimer();
});

let count = 0;
let isAllowed = true;
function startTimer() {
	if (appDetails.timerId) return;
	appDetails.timerId = setInterval(() => {
		updateDashboard();

		if (appDetails.totalSeconds <= 0) {
			clearInterval(appDetails.timerId);
			htmlElements.dashboard.textContent = "Session Completed";
			localStorage.removeItem("runningSession");
			return;
		}

		if (appDetails.phaseSeconds <= 0) {
			if (appDetails.currentSession == "study") {
				appDetails.currentSession = "break";
				appDetails.phaseSeconds = Number(appDetails.session.breakDuration) * 60;
				htmlElements.quotes.style.display = "none";
			} else {
				appDetails.currentCycle++;
				if (appDetails.currentCycle > Number(appDetails.session.cycle)) {
					clearInterval(appDetails.timerId);
					htmlElements.dashboard.textContent = "Session Completed";
					return;
				}
				appDetails.currentSession = "study";
				showQuotes();
				htmlElements.quotes.style.display = "flex";
				appDetails.phaseSeconds = Number(appDetails.session.studyDuration) * 60;
			}
		}

		appDetails.phaseSeconds--;
		appDetails.totalSeconds--;
		if (!isAllowed) return;
		let temp = {
			...appDetails.session,
			phaseSecondsLeft: appDetails.phaseSeconds,
			totalSecondsLeft: appDetails.totalSeconds,
			currentRunningCycle: appDetails.currentCycle,
			currentSession: appDetails.currentSession,
		};
		localStorage.setItem("runningSession", JSON.stringify(temp));
		isAllowed = false;
		setTimeout(() => {
			isAllowed = true;
		}, 3000);
	}, 1000);
}

function updateDashboard() {
	htmlElements.currentPhaseEle.textContent =
		appDetails.currentSession == "study" ? "STUDY" : "BREAK";
	htmlElements.dashboardCycleEle.textContent =
		appDetails.currentCycle + " / " + appDetails.session.cycle;
	htmlElements.totalTimeEle.textContent = convertTime(appDetails.totalSeconds);
	htmlElements.currentPhaseTimeEle.textContent = convertTime(appDetails.phaseSeconds);
}

function convertTime(sec) {
	let m = Math.floor(sec / 60);
	let s = sec % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function showDashboard(state) {
	htmlElements.dashboard.style.display = "flex";
	htmlElements.form.style.display = "none";

	updateDashboard();

	if (state === "resume") {
		startTimer();
	}
}

function showForm() {
	htmlElements.dashboard.style.display = "none";
	htmlElements.form.style.display = "flex";
}

htmlElements.showHistoryBtn.addEventListener("click", () => {
	if (htmlElements.showHistoryBtn.textContent == "Show History") {
		htmlElements.showHistoryBtn.textContent = "Hide History";
		htmlElements.historyContainer.style.display = "flex";
		handleHistory();
	} else {
		htmlElements.showHistoryBtn.textContent = "Show History";
		htmlElements.historyContainer.style.display = "none";
	}
});
function handleHistory() {
	const tbody = htmlElements.table.querySelector("tbody");
	tbody.innerHTML = "";
	historyDetails.forEach((ele) => {
		const tr = document.createElement("tr");
		tr.innerHTML = `<td>${ele.sessionName}</td>
					  <td>${ele.studyDuration * ele.cycle}</td>
					  <td>completed</td>`;
		tbody.appendChild(tr);
	});
}

function autoPause(reason = "Auto Pause") {
	if (isPaused) return;
	console.log(reason);

	clearInterval(appDetails.timerId);
	appDetails.timerId = null;
	isPaused = true;
	localStorage.setItem("state", "pause");

	const tempSession = JSON.parse(localStorage.getItem("runningSession"));
	if (tempSession) {
		tempSession.totalSecondsLeft = appDetails.totalSeconds;
		tempSession.phaseSecondsLeft = appDetails.phaseSeconds;
		localStorage.setItem("runningSession", JSON.stringify(tempSession));
	}
}

document.addEventListener("visibilitychange", () => {
	if (document.hidden) {
		autoPause("Tab Switch / browser Minimize");
	}
});

window.addEventListener("resize", () => {
	autoPause("Resize window");
	// console.log("resize");
	
});
