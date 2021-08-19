let ulElement = document.querySelector("ul");
ulElement.className = "ul-style";

let liEl1 = document.createElement("li");
liEl1.className = "li-style";
liEl1.textContent = "Home";
ulElement.appendChild(liEl1);

let liEl2 = document.createElement("li");
liEl2.className = "li-style";
liEl2.textContent = "About";
ulElement.appendChild(liEl2);

let liEl3 = document.createElement("li");
liEl3.className = "li-style";
liEl3.textContent = "Contact";
ulElement.appendChild(liEl3);

let liEl4 = document.createElement("li");
liEl4.className = "li-style";
liEl4.textContent = "Services";
ulElement.appendChild(liEl4);

let liEl5 = document.createElement("li");
liEl5.className = "li-style";
liEl5.textContent = "Blog";
ulElement.appendChild(liEl5);

let navLinks = document.querySelectorAll("li");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    navLinks.forEach(function (el) {
      el.className = "li-style";
    });
    link.classList.add("li-hover");
  });
});

// console.log(containerEl);
