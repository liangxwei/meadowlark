var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){
    
    setup(function(){
        browser = new Browser();
    });

    test('visiting the "request group rate" page dirctly should result ' +
        'in an empty referrer field', function(done){
            this.timeout(15000);
            browser.visit('http://localhost:3000/tours/request-group-rate',
            function(){
            assert(browser.field('referrer').value === '');
            done();
        });
    });

    test('requesting a group rate quote from the hood river tour page' +
    'should populate the referrer field', function(done){
        this.timeout(15000);
        var referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, function(){
            browser.clickLink('.requestGroupRate', function(){
                assert(browser.field('referrer').value === '');
                done();
            });
        });
    });

});