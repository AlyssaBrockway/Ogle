async function addMovies(){
    await db.collection("movies").get().then(function (querysnapshot){
        querysnapshot.forEach(async function(doc) {
            if (doc.id=="none") {}
            else{

                var storage = await firebase.storage();

                        await storageRef
                            .child("poster/" + doc.data().photo)
                            .getDownloadURL()
                            .then(async function (url) {

                
                


                section = document.createElement("div");
                section.classList.add("section");
                section.setAttribute("onclick","page(this)");

                container = document.createElement("div");
                container.classList.add("container");
                section.appendChild(container);
                
                
                image = document.createElement("img");
                image.classList.add("poster");
                image.src = url
                container.appendChild(image);

                title = document.createElement("h2");
                title.classList.add("title");
                title.innerText = doc.data().title
                container.appendChild(title);

                description = document.createElement("p");
                description.classList.add("description");
                description.innerText = doc.data().description;
                container.appendChild(description);
                
                length = document.createElement("p");
                length.classList.add("description");
                length.innerText = doc.data().length;
                
                rating = document.createElement("p");
                rating.classList.add("rating");
                rating.innerText = doc.data().age;
                container.appendChild(rating);
                
                times = document.createElement("div");
                times.classList.add("times");
                section.appendChild(times);

                time = document.createElement("p");
                times.appendChild(time);
                
                document.getElementById("films").appendChild(section);
                            })
            }
        });
    });
};
window.addEventListener("DOMContentLoaded", addMovies);
function page(e){
    document.querySelector("#films").style.display = "none"
    document.querySelector("#info").style.display = "grid"
    
    info = document.querySelector("#info")
    info.querySelector(".poster1").src = e.querySelector(".poster").src

    info.querySelector(".title1").innerText = e.querySelector(".title").innerText
    
    info.querySelector(".description1").innerText = e.querySelector(".description").innerText
    
    info.querySelector(".rating1").innerText = e.querySelector(".rating").innerText
    
    document.getElementById("info").appendChild(length);
    
    
}
var rooms = ["A","B","C","D","E","F"]

for (i=0;i<rooms.length;i++){
    var days = ["moday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    room = document.createElement("div");
    room.classList.add("room");
    
    for (a=0;a<days.length;a++){
        db.collection(room[i]).doc(day[i]).get().then(function (querysnapshot){
            querysnapshot.forEach(async function(doc) {
               
            })
        })        
    }
    
}