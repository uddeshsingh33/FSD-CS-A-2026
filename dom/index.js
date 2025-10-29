



const button = document.getElementById("btn");
console.log(button);
const loading = document.getElementById('disp');
function displayData(){
   
       const div = document.getElementsByClassName("container");


        
        setTimeout(() => {
        console.log("i am justice");
const h2 = document.createElement('h2');
h2.innerText="i hide into the shadows";
h2.style.backgroundColor='red';
h2.style.color='black';
console.log(h2);
div[0].appendChild(h2);


const image = document.createElement('img');
image.src="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/dfa50804-e6f6-4fa2-a732-693dbc50527b/37082735-6715-11ef-96ad-02805d6a02df?host=wbd-images.prod-vod.h264.io&partner=beamcom";
image.setAttribute('height',600);
image.setAttribute('width',1520);
console.log(image);
div[0].appendChild(image);
 loading.innerHTML=``;
        },2000)
    loading.innerHTML=`<h2 style=color:black backgroundColor:red> Data is loading</h2>`;



}

button.addEventListener('click',displayData);