function createWorkItem(title) {
    const myWorkItemImg = document.createElement('div')
    myWorkItemImg.className = 'myWork__item-img'

    const addImg = document.createElement('a')
    addImg.href = 'img/logos/' + addWorkImg.files[0].name
    addImg.target = '_blank'

    const img = document.createElement('img')
    img.className = 'img'
    img.src = 'img/logos/' + addWorkImg.files[0].name

    const myWorkItemDescr = document.createElement('div')
    myWorkItemDescr.className = 'myWork__item-descr'

    const p = document.createElement('p')
    p.innerText = addWorkCategory.value

    const h2 = document.createElement('h2')
    h2.innerText = title

    const myWorkItem = document.createElement('div')
    myWorkItem.className = 'myWork__item'

    myWorkItem.appendChild(myWorkItemImg)
    myWorkItem.appendChild(myWorkItemDescr)
    myWorkItemImg.appendChild(addImg)
    addImg.appendChild(img)
    myWorkItemDescr.appendChild(p)
    myWorkItemDescr.appendChild(h2)
    console.log(myWorkItem)
    return myWorkItem
}


function addWorkItem(event) {
    event.preventDefault()

    if (addWorkName.value === '') return alert('Необходимо дать название дизайну')

    const WorkItem = createWorkItem(addWorkName.value)
    myWorkItems.appendChild(WorkItem)

    addWorkForm.classList.add('hide')
}


const addWorkForm = document.querySelector('.addWork__form')
const addWorkBtn = document.querySelector('.addWork__btn')
const addWorkInputClose = document.querySelector('.addWork__input-close')
const addWorkInputBtn = document.querySelector('.addWork__input-btn')
const addWorkName = document.querySelector('.addWork__name')
const addWorkCategory = document.querySelector('.addWork__category')
const addWorkImg = document.querySelector('.addWork__img')
const addForm = document.querySelector('#addForm')
const myWorkItems = document.querySelector('.myWork__items')


addWorkBtn.addEventListener('click', function () {
    addWorkForm.classList.remove('hide')
})

addWorkInputClose.addEventListener('click', function () {
    addWorkForm.classList.add('hide')
})


addWorkForm.addEventListener('submit', addWorkItem)