const p1=document.querySelector('.p1')
const progressBar=document.querySelector('.progress-bar')
const submit=document.querySelectorAll('.submit')
// const submit=document.querySelector('.submit-btn')
const modal=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const closeBtn=document.querySelector('.close-btn')
const radioBtn=document.querySelectorAll('.radio-btn')
const containerB4=document.querySelectorAll('.container-b-4')
const jsContainer1=document.querySelector('.js-container1')
const jsContainer2=document.querySelector('.js-container2')
const jsContainer3=document.querySelector('.js-container3')
const jsContainer4=document.querySelector('.js-container4')
const radio1=document.querySelector('#radio-1')
const radio2=document.querySelector('#radio-2')
const radio3=document.querySelector('#radio-3')
const radio4=document.querySelector('#radio-4')
const btn1=document.querySelector('#btn1')
const btn2=document.querySelector('#btn2')
const btn3=document.querySelector('#btn3')
const btn4=document.querySelector('#btn4')
const num1=document.querySelectorAll('.num1')
const num2=document.querySelectorAll('.num2')
const num3=document.querySelectorAll('.num3')
const mahoganySpecial=document.querySelector('.mahogany-special')
const mahoganySpecial1=document.querySelector('.mahogany-special1')
const bookmark=document.querySelector('.bookmark')
let num=0
let val=1

submit.forEach(sub=>{
    sub.addEventListener('click',evt => {
        overlay.classList.add('active-lay')
        modal.classList.add('active')
    })
})

closeBtn.addEventListener('click',evt => {
    overlay.classList.remove('active-lay')
    modal.classList.remove('active')
    let cont1=evt.path[2].children[1].children[2]
    radio1.checked=false
    cont1.classList.add('container-6')
    let cont2=evt.path[2].children[2].children[2]
    radio2.checked=false
    cont2.classList.add('container-6')
    let cont3=evt.path[2].children[3].children[2]
    radio3.checked=false
    cont3.classList.add('container-6')
    let cont4=evt.path[2].children[4].children[2]
    radio4.checked=false
    cont4.classList.add('container-6')
})

overlay.addEventListener('click',evt => {
    modal.classList.remove('active')
    overlay.classList.remove('active-lay')
})

function check() {
    if (radio1.checked){
        jsContainer1.classList.toggle('container-6')
    }
    else if (radio2.checked){
        jsContainer2.classList.toggle('container-6')
    }
    else if (radio3.checked){
        jsContainer3.classList.toggle('container-6')
    }
    else if (radio4.checked){
        jsContainer4.classList.toggle('container-6')
    }
    else{
        jsContainer1.classList.add('container-6')
    }
}



btn1.addEventListener('click',evt => {
        evt.preventDefault()
        console.log(evt)
        const input1 = evt.path[1][0].value
        num=parseInt(input1)
})



btn2.addEventListener('click',evt => {
    evt.preventDefault()
    console.log(evt)
    let input1 = evt.path[1][0].value
    num=parseInt(input1)
    for(let i=0;i<num1.length;i++) {
        values = num1[i]
        value1 = parseInt(values.innerHTML)
        console.log(typeof value1)
        if (num >= 25) {
            console.log('right number')
            console.log(values)
            values.innerHTML = (value1 -= val).toString()
            overlay.classList.remove('active-lay')
            modal.classList.remove('active')
        } else {
            console.log('num should be $25 or more')
        }
    }

})

btn3.addEventListener('click',evt => {
    evt.preventDefault()
    console.log(evt)
    let input1 = evt.path[1][0].value
    num=parseInt(input1)
    for (let i=0;i<num2.length;i++){
        values=num2[i]
        value1=parseInt(values.innerHTML)
    if (num>=75){
        console.log('right num')
        console.log(values)
        values.innerHTML = (value1 -= val).toString()
        overlay.classList.remove('active-lay')
        modal.classList.remove('active')
    } else{
        console.log('num should be $75 or more')
    }
    }
})


btn4.addEventListener('click',evt => {
    evt.preventDefault()
    console.log(evt)
    let input1 = evt.path[1][0].value
    num=parseInt(input1)
    for (let i=0;i<num3.length;i++){
        values=num3[i]
        value1=parseInt(values.innerHTML)
        if (num>=75){
            console.log('right num')
            values.innerHTML = (value1 -= val).toString()
            overlay.classList.remove('active-lay')
            modal.classList.remove('active')
            if (value1===0){
                jsContainer4.classList.add('container-6')
                mahoganySpecial.classList.add('pointer-event')
                mahoganySpecial1.classList.add('pointer-event')
                radio4.checked=false
            }
        } else{
            console.log('num should be $75 or more')
        }
    }
})


