function initTabNav() {
    const tabSelect = document.querySelectorAll('.js-select li');
    const tabBackground = document.querySelectorAll('.js-background li');
    const tabName = document.querySelectorAll('.js-name p');
    const tabSkin = document.querySelectorAll('.js-name span');
    const accordionList = document.querySelectorAll('.js-accordion dl');


    if (tabSelect.length && tabBackground.length && tabName.length && tabSkin.length && accordionList.length) {
        tabBackground[0].classList.add('ativo');
        tabName[0].classList.add('ativo');
        tabSkin[0].classList.add('ativo');
        accordionList[0].classList.add('ativo');

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
            accordionList.forEach((list) => {
                list.classList.remove('ativo');
            });
            tabBackground[index].classList.add('ativo');
            tabName[index].classList.add('ativo');
            tabSkin[index].classList.add('ativo');
            accordionList[index].classList.add('ativo');
        }

        tabSelect.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();