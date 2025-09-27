//TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
//console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs__item");
//console.log(tabsItems);


// Функция скрывает табы и убирает active у кнопок
function hideTabs (){
  tabsItems.forEach(item => item.classList.add("hide"));
  tabsBtns.forEach(item => item.classList.remove("active"));
}


// Функция показывает передний номер таба и делает соотвествующую кнопку
function showTabs(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTabs(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabs();
  showTabs(index);
}));

//ANCHORS
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
  anc.addEventListener("click", function(event) {
    event.preventDefault();
    
    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop -80,
      behavior: 'smooth'
    });

  });
});