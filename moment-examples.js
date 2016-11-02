var moment = require('moment');

var now = moment();

//console.log(now);
console.log();
console.log(now.format());
console.log(now.format('DD/MM/YYYY, HH:mm:ss'));
console.log();
//current timestamp
console.log('current timestamp:');
console.log(now.format('X'));
console.log('small x for msecs:');
console.log(now.format('x'));
console.log();
console.log('50 years ago:');
now.subtract(50, 'year'); 
console.log(now.format());
console.log(now.format('MMM Do YYYY, h:mm:ss A'));
console.log(now.format('DD/MM/YYYY, HH:mm:ss'));
console.log(now.format('X'));

console.log();
console.log();

var timestamp = 1478111804009;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format('DD/MM/YYYY, HH:mm:ss'));
console.log(timestampMoment.local().format('DD/MM/YYYY, HH:mm:ss'));
