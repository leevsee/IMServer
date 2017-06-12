var express = require('express');
var router = express.Router();
var rongcloudSDK = require( 'rongcloud-sdk' );
rongcloudSDK.init( '25wehl3u287ew', 'PTqJ7t5sd1T' );

/* GET users listing. */
router.get('/getToken', function(req, res, next) {
    console.log(req.query);

    rongcloudSDK.user.getToken( req.query.userId, req.query.name, req.query.portraitUri, function( err, resultText ) {
        if( err ) {
            // Handle the error
        }
        else {
            var result = JSON.parse( resultText );
            if( result.code === 200 ) {
                //Handle the result.token
                console.log(result);

            }
        }
        res.status(200).send({"results":"ok", message: JSON.parse( resultText )});
    } );

});

module.exports = router;
