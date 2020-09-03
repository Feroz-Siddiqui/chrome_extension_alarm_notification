chrome.runtime.onInstalled.addListener(function () {
	console.log('teats alarm installed')
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log('onMessage ... ');

	console.log(request);

	switch (request.action) {
		case "listAlarm":
			chrome.alarms.getAll(function (alarms) {
				console.log(alarms);
			});
			break;
		case "createAlarm":
			createAlarm("ferozAlarm1");
			break;
		case "cancelAlarm":
			cancelAlarm("ferozAlarm1");
			break;

	}

});

chrome.alarms.onAlarm.addListener(function (alarm) {
	console.log("Got an alarm!", alarm);
	/* while create notification , name of notification should be different so that notification wil be visible in chrome*/
	var date = new Date(); // some mock date
	var milliseconds = date.getTime();

	chrome.notifications.create(alarm.name + milliseconds, {
		type: 'basic',
		iconUrl: 'images/call-answered.svg',
		title: 'Don\'t forget!',
		message: 'You have ' + alarm.name + ' things to do. Wake up, dude!'
	}, function (notificationId) {});
});


chrome.notifications.onClicked.addListener(function () {
	console.log('cliecked notification...');
});

function createAlarm(alarmName) {


	/* this will fire the alarm continously after 0.1 minutes
	chrome.alarms.create(alarmName, {
	     delayInMinutes: 0.1, periodInMinutes: 0.1}); */


	var t = new Date(Date.now() + 10000);


	chrome.alarms.create(alarmName, {
		when: t.getTime()
	});
}

function cancelAlarm(alarmName) {
	chrome.alarms.clear(alarmName);
}