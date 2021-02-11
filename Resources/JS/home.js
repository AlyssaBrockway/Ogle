if(document.id=="none"){};

db.collection(movies).get.then(function (querysnapshot){
    querysnapshot.forEach(async function(doc {
                
        container = document.createElement("div");
        container.classList.add("container");
        document.getElementById("films").appendChild(container);
        
        image = document.createElement("img");
        image.classList.add("poster");
        document.container.appendChild(image);

        title = document.createElement("h2");
        title.classList.add("title");

    }));
});