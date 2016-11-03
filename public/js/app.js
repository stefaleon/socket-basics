// getQueryVariable(someVar) is a custom function by andrewjmead
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);

socket.on('connect', function() {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	console.log('New message:');
	console.log(message.text);

	$('.messages').append('<p><strong>' + message.name + ' ' +
		momentTimestamp.local().format('DD/MM/YYYY, HH:mm:ss ') +
		'</strong></p>');
	$('.messages').append('<p>' + message.text + '</p>');

});

// Handles submitting of new message
var form = $('#message-form');
var msg = form.find('input[name=message]');

form.on('submit', function(event) {
	event.preventDefault();
	socket.emit('message', {
		name: name,
		text: msg.val()
	});

	// clear the form
	msg.val('');

});