const Koa = require('koa');
const route = require('koa-route');
const co = require('co');
const app = new Koa();
const axios = require('axios');
const cors = require('koa-cors');

app.use(cors());

app.use(route.get('/api/search/:keyword', async function(ctx, keyword) {
    await co(function* () {
        let response = [];
        const result1 = axios.get(`http://www.omdbapi.com/?apikey=fa281222&page=1&s=${keyword}&Type="movie"`);
        const result2 = axios.get(`http://www.omdbapi.com/?apikey=fa281222&page=2&s=${keyword}&Type="movie"`);
        const finalResult = yield ({ result1, result2 }) ;
        if(finalResult.result1.data.Response === 'True') {
          response.push(...finalResult.result1.data.Search);
        }
        if(finalResult.result2.data.Response === 'True') {
          response.push(...finalResult.result2.data.Search);
        }
        return response;
      }).then(function (value) {
        ctx.body = value;
      }, function (err) {
        console.error(err.stack);
        ctx.body = 'Error!!';
      });
}));

if (!module.parent) app.listen(5000);