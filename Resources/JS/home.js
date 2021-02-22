function addMovies(){
    db.collection("movies").get().then(function (querysnapshot){
        querysnapshot.forEach(async function(doc) {
            if (doc.id=="none") {}
            else{
                section = document.createElement("div");
                section.classList.add("section");
                

                container = document.createElement("div");
                container.classList.add("container");
                section.appendChild(container);
                
                image = document.createElement("img");
                image.classList.add("poster");
                
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

            }
        });
    });
};
window.addEventListener("DOMContentLoaded", addMovies);