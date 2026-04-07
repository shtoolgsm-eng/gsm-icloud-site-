import { db } from './firebase.js';
import { collection, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const table=document.getElementById("adminBody");

onSnapshot(collection(db,"orders"),snap=>{
table.innerHTML="";
snap.forEach(d=>{
const data=d.data();

table.innerHTML+=`
<tr>
<td>${data.service_name}</td>
<td>${data.imei}</td>
<td>${data.status}</td>
<td>
<button onclick="done('${d.id}')">Done</button>
</td>
</tr>`;
});
});

window.done=id=>{
updateDoc(doc(db,"orders",id),{status:"Completed"});
};
