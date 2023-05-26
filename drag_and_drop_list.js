const listItemsEl = document.querySelector(".listItems");
const itemsEl = listItemsEl.querySelectorAll(".items");

itemsEl.forEach(item => {

    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener("dragend", () =>item.classList.remove("dragging"));
});