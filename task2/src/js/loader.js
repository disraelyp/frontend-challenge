const dogsContainer = document.getElementById("dogs-container");

/**
 * Create a div element with a class and id
 * @param {string} className
 * @param {string} id
 * @returns {HTMLElement}
 */
function createDiv(className, id) {
    let container = document.createElement("div");
    container.setAttribute("id", id);
    container.setAttribute("class", className);
    return container;
}

/**
 * Handle error when image is not found
 * @param {string} id
 */
function onErrorHandle(id) {
    document.getElementById(id).src = "/public/image-not-found.jpg";
}

/**
 * Inject photo into the div element
 * @param {string} type
 * @param {string} id
 */
function injectPhoto(type, id, text) {
    let dog = document.getElementById(id);

    // Fetch a random image from the API
    fetch(`https://dog.ceo/api/breed/${type}/images/random`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dog.innerHTML += `
      <div class='dog-card-image-container'>
        <p class='dog-card-sub-text'>${text}</p>
        <img onerror="onErrorHandle('dog-${id}-image')" height='150px' width='150px' src='${data.message}' alt='${type}' class='dog-card-image' id='dog-${id}-image'>
      </div>`;
        });
}

/**
 * Fetch data from the API and create a div element for each dog
 */
fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status == "success") {
            // Get all the dogs
            const dogs = Object.keys(data.message);

            /**
             * Create a div element for each dog
             */
            dogs.map((dog, index) => {
                let container = createDiv("dog-card", `dog-${index}-container`);
                dogsContainer.appendChild(container);
                injectPhoto(
                    dog,
                    `dog-${index}-container`,
                    data.message[dog].slice(0, 3).join("</br>") + "</br>..."
                );
                container.innerHTML = `<div class='dog-card-name'><p class='dog-name' id='dog-${index}-text'>${dog}</p></div>`;
            });
        }
    });

