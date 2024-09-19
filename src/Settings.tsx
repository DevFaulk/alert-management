interface Settings {
	appCount: number;
	appArray: string[];
	autoRemoveResolved: boolean;
}

function defaultSettings(appCount, appArray, autoRemoveResolved) {
	this.appCount = 6;
	this.appArray = [
		'Outlook',
		'Moogsoft',
		'REAL',
		'To Me(Outlook)',
		'Tech Alerts',
		'My ServiceNow Alerts',
	];
	this.autoRemoveResolved = false;
}

export default defaultSettings;
