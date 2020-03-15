// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require("request");
const app = express();
const port = 9000;
const constant = require('./api');


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/images', function (req, res) {
    const url = req.body.url;


    const clientServerOptions = {
        uri: constant.imageApi + url,
        method: 'GET',
        headers: constant.fecthConfig
    }
    request(clientServerOptions, function (error, response) {
        if (response.statusCode == 200) {
            const result = JSON.parse(response.body);
            const data = result.data.filter(image => !image.is_album).map(item => {//server response have two model(image,album) so I ilter it to just access images NOT Album
                return {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    url: item.link,
                    upVotes: item.ups,
                    downVotes: item.downs,
                    score: item.score,
                    height: item.height,
                    width: item.width
                }
            })
            res.send(data)
        }
        else
            throw ("server has some problem in fetching data")
    });
});

// listen on the port
app.listen(port);