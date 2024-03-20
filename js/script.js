const tabSelect = document.querySelectorAll('.js-select li');
const tabBackground = document.querySelectorAll('.js-background li');
const tabName = document.querySelectorAll('.js-name p');
const tabSkin = document.querySelectorAll('.js-name span');


if (tabSelect.length && tabBackground.length && tabName.length && tabSkin.length) {
    tabBackground[0].classList.add('ativo');
    tabName[0].classList.add('ativo');
    tabSkin[0].classList.add('ativo');

    function activeTab(index) {
        tabBackground.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabName.forEach((p) => {
            p.classList.remove('ativo');
        });
        tabSkin.forEach((span) => {
            span.classList.remove('ativo');
        });
        tabBackground[index].classList.add('ativo');
        tabName[index].classList.add('ativo');
        tabSkin[index].classList.add('ativo');
    }

    tabSelect.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}