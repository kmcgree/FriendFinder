
const friends = require('../data/friends');


module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('api/friends', (req, res) => {
        let userScores = req.body.scores;
        let difference = 1000;
        let bestMatchName = '';
        let bestMatchPhoto = '';

        friends.forEach((person) => {
            let scores = [];
            let totalDifference = 1000;

            function add(a, b) {
                return a + b;
            }

            for (i = 0; i < person.scores.length; i++) {
                matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(person.scores[i])));
            }

            totalDifference = scores.reduce(add, 0);

            if (totalDifference < difference) {
                difference = totalDifference;

                bestMatchName = person.name;
                bestMatchPhoto = person.photo;
            }
        });

        res.json({
            name: bestMatchName,
            photo: bestMatchPhoto
        });

        friends.push(req.body);
    });


};