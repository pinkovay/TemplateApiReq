// TODO: Separar a área de rotas do arquivo index.js

require('dotenv').config();
const PORT = process.env.PORT || 3000

const app = require('./helpers/expressConfig')

// Importando as rotas
const testeFirebase = require('./controller/testeFirebase');
app.use("/firebase", testeFirebase)

const routerConfigRoutes = require("./helpers/routerConfig");
app.use("/", routerConfigRoutes)

app.listen(PORT, ()=>{
    console.log('\x1b[42;30m%s\x1b[0m', ` API RODANDO EM - http://localhost:${PORT} `);
})