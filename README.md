# chrome_extension_alarm_notification

This project is create for basic functionality of chrome extesion alarm and Notification.


Following are points to be considered while setting the alarm.
to trigger the alarm on interval basis below is code :
chrome.alarms.create(alarmName, {
	delayInMinutes: 0.1,
	periodInMinutes: 0.1
});
To trigger the alarm once at specific interval below is code :
it will trigger the alarm after 10 seconds

var triggerDate = new Date(Date.now() + 10000);
chrome.alarms.create(alarmName, {
	when: triggerDate.getTime()
});
 
  Alarm trigger Callback with Notification
  Notification name should be unique so that it will be visble to user otherwise duplicate name on notification wont be visible in chrome:
  
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



Notification click listner:

chrome.notifications.onClicked.addListener(function () {
	console.log('clicked notification...');
});


Canceling a specific Alarm using name:
chrome.alarms.clear(alarmName);


Cancelling All Alarm:
chrome.alarms.getAll(function (alarms) {
	for (var alarm of alarms) {
		chrome.alarms.clear(alarm.name);
	}
});



  
  
  
