# chrome_extension_alarm_notification

This project is create for basic functionality of chrome extesion alarm and Notification. All code should be written in background js.


Following are points to be considered while setting the alarm.
to trigger the alarm on interval basis below is code :

```javascript
chrome.alarms.create(alarmName, {
	delayInMinutes: 0.1,
	periodInMinutes: 0.1
});
```

To trigger the alarm once at specific interval below is code :

PS:it will trigger the alarm after 10 seconds
```javascript
var triggerDate = new Date(Date.now() + 10000);
chrome.alarms.create(alarmName, {
	when: triggerDate.getTime()
});
 ```
 Alarm trigger Callback with Notification
 
 PS: Notification name should be unique so that it will be visble to user otherwise duplicate name on notification wont be visible in chrome:
  ```javascript
  chrome.alarms.onAlarm.addListener(function (alarm) {
	console.log("Got an alarm!", alarm);
=	var date = new Date(); // some mock date
	var milliseconds = date.getTime();

	chrome.notifications.create(alarm.name + milliseconds, {
		type: 'basic',
		iconUrl: 'images/call-answered.svg',
		title: 'Don\'t forget!',
		message: 'You have ' + alarm.name + ' things to do. Wake up, dude!'
	}, function (notificationId) {});
});
 ```



Notification click listner:
  ```javascript
chrome.notifications.onClicked.addListener(function () {
	console.log('clicked notification...');
});
 ```


Canceling a specific Alarm using name:
  ```javascript
chrome.alarms.clear(alarmName);
 ```


Cancelling All Alarm:
  ```javascript
chrome.alarms.getAll(function (alarms) {
	for (var alarm of alarms) {
		chrome.alarms.clear(alarm.name);
	}
});
 ```




  
  
  
