const { getStorage, ref, getDownloadURL, uploadBytes, listAll, deleteObject } = require("firebase/storage");
const { initializeApp } = require("firebase/app");
const firebaseConfig = require("../config/firebaseConfig");

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

module.exports = {
    ref,
    getDownloadURL,
    uploadBytes,
    listAll,
    deleteObject,
    storage
};
