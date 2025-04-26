const express = require('express');
const dotenv = requrie('dotenv');
const apiRoutes = require('./routes/apiRoutes');
const chatRoutes = require('./routes/chatRoutes')
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
dotenv.config()

const app = express();

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/api/chat', )

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`The server is running on ${PORT}`)})
