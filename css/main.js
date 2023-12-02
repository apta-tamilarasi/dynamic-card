let details=[
    {
        id:0,
        video:"video/k1.mp4",
        title:"korean",
        name:"APTA.BABY",
        image:"image/1.jpg",
        
    },

    {
        id:1,
        video:"video/k2.mp4",
        title:"korean",
        name:"Hashini.edits",
        image:"image/2.jpg",
    },

    {
        id:2,
        video:"video/g1.mp4",
        title:"god",
        name:"GOD",
        image:"image/3.jpg",
    },

    {
        id:3,
        video:"video/g2.mp4",
        title:"korean",
        name:"Thanimai kadhalan",
        image:"image/4.jpg",
    },

    {
        id:4,
        video:"video/t1.mp4",
        title:"tamil",
        name:"EFX.edits",
        image:"image/6.jpg",
    },

    {
        id:5,
        video:"video/h1.mp4",
        title:"tamil",
        name:"BTS.ARMY",
        image:"image/5.jpg",
    }
]


var section=document.getElementById("card-sec");

var container=document.createElement("div");
container.classList.add("card-container");
section.appendChild(container);

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);


details.forEach(function(e){

var col=document.createElement("div");
col.classList.add("card-col", "card");
row.appendChild(col);

var head=document.createElement("div");
head.classList.add("card-head");
col.appendChild(head);

var dp=document.createElement("div");
dp.classList.add("card-dp");
head.appendChild(dp);

var image=document.createElement("img");
image.classList.add("card-img");
dp.appendChild(image);
image.setAttribute("src", e.image);

var id=document.createElement("p");
id.classList.add("card-idname");
head.appendChild(id);
id.innerHTML=e.name;


var cols=document.createElement("div");
cols.classList.add("card-cols");
col.appendChild(cols);


var col1=document.createElement("div");
col1.classList.add("card-col1");
cols.appendChild(col1);


var video=document.createElement("video");
col1.appendChild(video);
video.setAttribute("controls","true");


var source=document.createElement("source");
video.appendChild(source);
source.setAttribute("src", e.video);


var col2=document.createElement("div");
col2.classList.add("card-col2");
cols.appendChild(col2);

var i1=document.createElement("i");
i1.classList.add("fa","fa-heart");
i1.setAttribute("aria-hidden", true);
col2.appendChild(i1);

var para=document.createElement("p");
para.classList.add("card-para");
para.innerHTML="0 Likes";
col2.appendChild(para);


var i2=document.createElement("i");
i2.classList.add("fa" ,"fa-whatsapp");
i2.setAttribute("aria-hidden", true);
col2.appendChild(i2);

var i3=document.createElement("i");
i3.classList.add("fa" ,"fa-comment");
i3.setAttribute("aria-hidden", true);
col2.appendChild(i3);

var i4=document.createElement("i");
i4.classList.add("fa" ,"fa-download");
i4.setAttribute("aria-hidden", true);
col2.appendChild(i4);






})

var heart=document.getElementsByClassName("fa-heart");
console.log(heart);

var para=document.getElementsByClassName("card-para");
console.log(para);

var download=document.getElementsByClassName("fa-download");
console.log(download);

likeheart=true

for (let i=0; i<heart.length; i++){
     let a=0;

        
heart[i].addEventListener("click", function(){


    if(likeheart==false){
        heart[i].style.color="black";
        heart[i].style.opacity="0.5";
        para[i].innerHTML=a+" Likes";
        likeheart=true
    }
    
    else{
         
        heart[i].style.color="red";
        heart[i].style.opacity="1";
        para[i].innerHTML=a+1+" Likes";
        likeheart=false
        }
    
    
    })
    }
    
    

    

   


var videos=document.getElementsByClassName("card-col1");

for (let i=0; i<download.length; i++){
    let a=0;
    download[i].addEventListener("click", function(){
        download[i].style.color="black";
        download[i].style.opacity="1";
        var video1=videos[i].innerHTML;
        localStorage.setItem("vid", video1);

    download[i].addEventListener("click", function(){
        download[i].style.color="black";
        download[i].style.opacity="0.5";
        })
    })

   
}





var all=document.getElementById("a");
var korean=document.getElementById("k");
var tamil=document.getElementById("t");
var god=document.getElementById("g");
var save=document.getElementById("s");
var cards=document.getElementsByClassName("card");



    
        korean.addEventListener("click", function(){
            details.forEach(function(e){
            // cards[0].style.display="block";
            // cards[1].style.display="block";
            // cards[2].style.display="block";
            // cards[3].style.display="block";
            // cards[4].style.display="block";
            // cards[5].style.display="block";


        if(e.title=="korean"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
            
            // cards[0].style.display="block";
            // cards[1].style.display="block";
            // cards[3].style.display="block";
            // cards[5].style.display="block";
        }

        else{
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";
            // cards[4].style.display="none";
            // cards[2].style.display="none";
          
            
        }


})
})

 god.addEventListener("click", function(){
            details.forEach(function(e){


                if(e.title=="god"){
                    var a=e.id;
                    console.log(a);
                    cards[a].style.display="block";
                    
                }
        
                else{
                    var b=e.id;
                    console.log(b);
                    cards[b].style.display="none";
                    
                }


})
 })

tamil.addEventListener("click", function(){
            details.forEach(function(e){

            // cards[0].style.display="block";
            // cards[1].style.display="block";
            // cards[2].style.display="block";
            // cards[3].style.display="block";
            // cards[4].style.display="block";
            // cards[5].style.display="block";


        if(e.title=="tamil"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
        }

        else{
            
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";

            // cards[0].style.display="none";
            // cards[1].style.display="none";
            // cards[3].style.display="none";
            // cards[2].style.display="none";
            
        }


})
 })


all.addEventListener("click", function(){
    details.forEach(function(e){
        var a=e.id;
        console.log(a);
        cards[a].style.display="block";

    // cards[0].style.display="block";
    // cards[1].style.display="block";
    // cards[2].style.display="block";
    // cards[3].style.display="block";
    // cards[4].style.display="block";
    // cards[5].style.display="block";
    })
})


save.addEventListener("click", function(){
    location.href="file:///E:/fabevy/MY%20PROJECTS/js%20project%20-dynamic%20card/open%20dynamic%20card/index.html";

})


