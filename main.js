
const menu = document.getElementById("nav-menu");
const toggle = document.getElementById("menu-toggle");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
toggle.classList.toggle("active");
});
 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {

    faqItems.forEach(i => {
      if(i !== item){
        i.classList.remove("active");
        i.querySelector("span").textContent = "+";
      }
    });

    item.classList.toggle("active");

    const icon = item.querySelector("span");
    icon.textContent = item.classList.contains("active") ? "-" : "+";

  });
});