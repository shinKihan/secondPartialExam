const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );

const app = express();


/* Your code goes here */
app.get('/sports/delete'. jsonParser, (req, res) => {
    if(!req.body.id) {
        res.statusMessage = "Id was required"
        return res.status(406).send()
    }

    if(!req.sportId) {
        res.statusMessage = "Id was required"
        return res.status(409).send()
    }

    if(req.body.id != req.sportId) {
        res.statusMessage = "they Id are different"
        return res.status(406).send()
    }

    sport.deleteSport(req.body.id).then(deletionInformation => {
        if(deletionInformation.deletedCount==0){
            deletionInformation.statusMessage = "the id was not found"
            return res.status(404).send
        } else {
            return res.status(204).send();
        }
    })
})

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});