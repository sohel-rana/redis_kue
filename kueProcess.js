/**
 * Created by sohel on 12/21/16.
 */

var kue = require('kue')
  , queue = kue.createQueue();
//
// queue.process('email', function(job, done){
//   email(job.data.to, done);
// });
//
// function email(address, done) {
//   console.log('Processing address', address);
//   done();
// }


queue.inactive( function( err, ids ) {
  kue.Job.get( ids[0], function( err, job ) {
    // Your application should check if job is a stuck one
    console.log(JSON.stringify(job));
    job.complete();
  });
});





