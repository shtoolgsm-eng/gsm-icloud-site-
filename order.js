import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

window.submitOrder = async () => {

const service = document.getElementById("serviceSelect");
const imei = document.getElementById("imeiInput").value.trim();

if (!service.value || imei.length !== 15)
return alert("Invalid data");

await addDoc(collection(db,"orders"),{
service_name: service.options[service.selectedIndex].text,
imei,
status:"Pending",
date:new Date()
});

alert("Order Sent ✅");
window.location.href="track.html";
};
