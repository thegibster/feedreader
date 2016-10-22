$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

         beforeEach(function(done){
             done();
         });

         it('are defined', function(done) {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            done();
         });

         function loop_through_url(item){
            it("has a url defined", function() {
              expect(item.url).toBeDefined();
              expect(item.url.length).not.toEqual(0);
          });
         }


        for(var x = 0; x < allFeeds.length; x++) {
           loop_through_url(allFeeds[x]);
         }

         function loop_through_name(item){
             it("has a name defined", function() {
               expect(item.name).toBeDefined();
               expect(item.name.length).not.toEqual(0);
           });
         }

         for(var x = 0; x < allFeeds.length; x++) {
            loop_through_name(allFeeds[x]);
         }
    });

    describe('The menu', function() {

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
          expect($('body').hasClass('menu-hidden')).toBeFalsy();
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done){
          loadFeed(0,done);
        });

        it ("loadFeed has at least a single .entry inside .feed ", function() {
          expect($('.feed .entry').length).toBeGreaterThan(0);
        });
   });

    describe('New Feed Selection', function() {
        var initalValue;
        beforeAll( function(done) {

          // call asyncFunction and pass it an anonymous callback function
          loadFeed(0);
          initalValue = $('.feed .entry').html();
          loadFeed(1, function() {

              console.log(initalValue);
              console.log('This console.log will run after asyncFunction finishes successfully'); // good

              done();
          });  //.asyncFunction

          console.log('This console.log will NOT wait for asyncFunction to finish. It will just run after asyncFunction is called'); // only good if this task doesn't need to wait for `asyncFunction` to finish
        }); //.beforeAll

        it ("loadFeed has a change of content ", function() {
          console.log($('.feed .entry').html());
          expect($('.feed .entry').html()).not.toEqual(initalValue);
         });
    });
}());
