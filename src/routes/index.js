const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/site', siteRouter);

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.post('/search', (req, res) => {
        res.send('');
    });

    app.get('/face', (req, res) => {
        res.render('face');
    });
}

module.exports = route;
