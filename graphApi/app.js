const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const graphqlHttp = require('express-graphql');
const isAuth = require('./middleware/auth');
// const graphqlSchema = require('./graphql/schema');
// const graphqlResolver = require('./graphql/resolvers');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

// const config = require('./config/config.json');

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://Saumya1309:Saumya555@cluster0.evsto.mongodb.net/101242624_comp3133_assig2?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    app.listen(3000, console.log('Connected to Port 3000.'));
  })
  .catch((err) => console.log(err));

// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const graphqlHttp = require('express-graphql');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const graphQlSchema = require('./graphql/schema/index');
// const graphQlResolvers = require('./graphql/resolvers/index');
// const isAuth = require('./middleware/auth');
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());



// app.use(isAuth);


// app.use(
//   '/graphql',
//   graphqlHttp({
//     schema: graphQlSchema,
//     rootValue: graphQlResolvers,
//     graphiql: true
//   })
// );

// mongoose
//   .connect(
//     `mongodb+srv://abanch:5AhUgkRNHmMMA3EA@cluster0.by7ay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });
