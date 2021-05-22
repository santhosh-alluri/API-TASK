var request = require('request');
var expect = require('chai').expect

describe('tests', function() {

        //set url
        url = 'https://api.football-data.org/v2/teams/12';
            
        //set header
         headers = {
            'X-Auth-Token': 'e051043b86624518a57a263f9388d198'
        };

    it('validate status code', function(done) 
    {
        request.get({headers: headers, url: url, method: 'POST'}, function (err, resp, body) {
            
            if (err) {
                console.log(err);
            } else {
                var bodyValues = JSON.parse(body);
                let responsecode = resp.statusCode;
                console.log(responsecode)
                expect(200).to.equal(responsecode);
                done()
            }
        });
    })

    it('validate status code without token', function(done) 
    {
        request.get({url: url, method: 'POST'}, function (err, resp, body) {
            
            if (err) {
                console.log(err);
            } else {
                var bodyValues = JSON.parse(body);
                let responsecode = resp.statusCode;
                console.log(responsecode)
                expect(403).to.equal(responsecode);
                done()
            }
        });
    })

    it('squad length more than 20', function(done) 
    {
        request.get({headers: headers,url: url, method: 'POST'}, function (err, resp, body) {
            
            if (err) {
                console.log(err);
            } else {
                var bodyValues = JSON.parse(body);
                let responsecode = resp.statusCode;
                expect(200).to.equal(responsecode);
                expect(bodyValues['squad'].length > 20).to.be.true;
                done()
            }
        });
    })

    

})