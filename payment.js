async function startPayment(){

const service = document.getElementById("serviceSelect");
const imei = document.getElementById("imeiInput").value;

if(!service.value || imei.length!==15){
alert("Invalid data");return;
}

const res = await fetch("http://localhost:3000/create-checkout",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
price:service.value,
service:service.options[service.selectedIndex].text,
imei:imei
})
});

const data = await res.json();
window.location.href = data.url;
}
