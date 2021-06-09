const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('Items')) || [];

function addItem(e) {
    e.preventDefault()
    console.log('hello');
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };
    items.push(item)
    this.reset();
    populateList(items, itemsList);
    localStorage.setItem('Items', JSON.stringify(items));
    console.log(item);
}

function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, i) => {
        return `
        <li> <input type=checkbox data-index = ${i} id = "item${i}" ${item.done ? 'checked' : ''}>
        <label for= "item${i}" >${item.text}</label>
        </li>
        `
    }).join('');

}

function toggleChecked(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('Items', JSON.stringify(items));
    populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleChecked)

populateList(items, itemsList);