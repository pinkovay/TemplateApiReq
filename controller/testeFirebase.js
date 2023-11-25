const app = require('../helpers/expressConfig')

const firebaseStorage = require('../helpers/firebaseStorage')

const { initializeApp } = require("firebase/app");
const firebaseConfig = require("../config/firebaseConfig");
const firebaseApp = initializeApp(firebaseConfig);

const router = require('../helpers/routerConfig')

const storage = firebaseStorage.storage

router.get('/testeFirebase', (req, res) => {
    console.log("DADOS DE CONFIG");
    console.log(firebaseConfig);
    console.log("DADOS DE CONEXÃO COM O FIREBASE");
    console.log(firebaseApp);
    console.log("DADOS DE CONEXÃO COM O STORAGE");
    console.log(storage);

    res.send("Dados enviados para o console")
})

module.exports = router;