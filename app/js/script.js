if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Мойка на Перекопской',
                        hasChildren: true,
                        items: [
                            {
                                name: '15',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: '15а',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Мойка на Ленина',
                        hasChildren: true,
                        items: [
                            {
                                name: 'ФЭИ',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'ФЭИ2',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            },{
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'ИМИКН',
                        hasChildren: true,
                        items: [
                            {
                                name: 'ИМИКН-ЧБ',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'ИМИКН-ГАУСС',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }
        ]
    }


    const items = new ListItems(document.getElementById('list-items'), data)

    items.render()
    items.init()

    /*console.log(items.renderTest(data));*/

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]')

            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]')

                open.addEventListener('click', () => this.toggleItems(parent) )
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.renderParent = function (data) {
            let element = ''
            element += '<div class="list-item list-item_open" data-parent>'
            element += this.getElementHtml(data)
            element += '<div class="list-item__items">'
            for (let item of data.items) {
                if (item.hasChildren) {
                    element += this.renderParent(item)
                }
                else{
                    element += this.renderChildren(item)
                }
            }
            element += '</div>'
            element += '</div>'
            return element
        }

        this.getElementHtml = function (element){
            let newHtmlEl = ''
            newHtmlEl += '<div class="list-item__inner">'
            newHtmlEl += '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>'
            newHtmlEl += '<img class="list-item__folder" src="img/folder.png" alt="folder">'
            newHtmlEl += `<span>${element.name}</span>`
            newHtmlEl += '</div>'
            return newHtmlEl
        }

        this.renderChildren = function (element) {
            let newHtmlEl = ''
            newHtmlEl += '<div class="list-item__inner">'
            newHtmlEl += '<div class="list-item__space">'
            newHtmlEl += '</div>'
            newHtmlEl += '<img class="list-item__folder" src="img/folder.png" alt="folder">'
            newHtmlEl += `<span>${element.name}</span>`
            newHtmlEl += '</div>'
            return newHtmlEl
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')
        }
    }

}