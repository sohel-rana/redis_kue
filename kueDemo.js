/**
 * Created by sohel on 12/21/16.
 */

var kue = require('kue'),
  queue = kue.createQueue();

var job =  queue.create('email', {
  title: 'welcome email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
}).save(function (err) {
  if(!err) console.log(JSON.stringify(job));
});

var job2 =  queue.create('email', {
  title: 'welcome email for sohel as job2'
  , to: 'sohel023010@gmail.com'
  , template: 'welcome-email2'
}).save(function (err) {
  if(!err) console.log(JSON.stringify(job2));
});

