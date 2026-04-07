import { db } from './firebase.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

window.checkStatus = async () => {

const imei = document.getElementById("trackImei").value;

const q = query(collection(db,"orders"), where("imei","==",imei));
const snap = await getDocs(q);

if(snap.empty){
document.getElementById("statusLabel").innerText="NOT FOUND";
}else{
document.getElementById("statusLabel").innerText=snap.docs[0].data().status;
}

};
