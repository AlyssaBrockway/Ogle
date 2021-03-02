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
}