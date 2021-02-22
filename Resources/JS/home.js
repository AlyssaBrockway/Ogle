(function(){
    db.collection("movies").get.then(function (querysnapshot){
        querysnapshot.forEach(async function(doc) {
            if (doc.id=="none") {}
            else{
                section = document.createElement("div");
                section.classList.add("section");
                document.getElementById("films").appendChild(section);

                container = document.createElement("div");
                container.classList.add("container");
                document.section.appendChild(container);
                
                image = document.createElement("img");
                image.classList.add("poster");
                document.container.appendChild(image);

                title = document.createElement("h2");
                title.classList.add("title");
                document.container.appendChild(title);

                description = document.createElement("p");
                description.classList.add("description");
                description.innerText = doc.data().title;
                document.container.appendChild(description);
                
                rating = document.createElement("p");
                rating.classList.add("rating");
                document.container.appendChild(rating);

                times = document.createElement("div");
                times.classList.add("times");
                document.section.appendChild(times);

                time = document.createElement("p");
                document.times.appendChild(time);


            }
        });
    });
})();
