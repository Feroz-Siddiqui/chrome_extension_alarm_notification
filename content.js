$(document).ready(function () {
	console.log("ready!");


	$("body").prepend('<div style="position:fixed;z-index:999999; height:500px; width:500px; right:5%;background:white;"><button id="create_alarm">Create Alarm</button><button id="cancel_alarm">Cancel Alarm</button><button id="list_alarm">List Alarm</button><div ><ol id="list_alarms"></ol></div></div>"');
	document.getElementById("list_alarm").addEventListener('click', function () {
		chrome.runtime.sendMessage({
			action: "listAlarm",
		});
		console.log('listAlarm');
	});
	document.getElementById("create_alarm").addEventListener('click', function () {

		chrome.runtime.sendMessage({
			action: "createAlarm",
		});

		console.log('createAlarm');
	});
	document.getElementById("cancel_alarm").addEventListener('click', function () {
		chrome.runtime.sendMessage({
			action: "cancelAlarm",
		});
		console.log('cancelAlarm');
	});
	chrome.runtime.sendMessage({
		action: "yahoo",
	});
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.action) {
		case "alarms":
			$('#list_alarms').empty();
			for (var alarm of message.senddata) {
				$('#list_alarms').append('<li>' + alarm.name + '<li>');
			}
			break;
	}
});
