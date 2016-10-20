/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         beforeEach(function(done){
             done();
         });

        it('are defined', function(done) {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            done();
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         function loop_through_url(item){
            it("has a url defined", function(done) {
              expect(item.url).not.toBeNull();
              done();
          });
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        for(var x = 0; x < allFeeds.length; x++) {
           loop_through_url(allFeeds[x]);
         }

          function loop_through_name(item){
             it("has a name defined", function(done) {
               expect(item.name).not.toBeNull();
               done();
           });
         }

         for(var x = 0; x < allFeeds.length; x++) {
            loop_through_name(allFeeds[x]);
          }


    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

         beforeEach(function(done){
             done();
           });


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it ("is menu hidden by default", function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it ("is menu change visibility on clicks", function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });


});


    /* TODO: Write a new test suite named "Initial Entries" */
       describe('The menu', function() {

             beforeEach(function(done){
                 done();
               });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         });
}());
