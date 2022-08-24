const buttonPlus = document.querySelectorAll(".plus")

const buttonMinus = document.querySelectorAll(".minus")
const count = document.querySelectorAll(".x")
const deleteButton = document.querySelectorAll(".cancel")
const bigDiv = document.querySelectorAll(".card")
const prices= document.querySelectorAll(".price")
const sum = document.querySelector(".sum")
const heart = document.querySelector(".heart")
const animationheart = document.querySelector(".animation-heart")


for(let i = 0; i < buttonMinus.length; i++) {
    buttonMinus[i].addEventListener("click",function(){
        if (count[i].innerHTML>0) {
            count[i].innerHTML--
            sum.innerHTML= parseInt(sum.innerHTML)-parseInt(prices[i].innerHTML)
        }
    })
}
for(let i = 0; i <buttonPlus.length; i++) {
    buttonPlus[i].addEventListener("click",function() {
        count[i].innerHTML++
        sum.innerHTML= parseInt(sum.innerHTML)+parseInt(prices[i].innerHTML)
    })
}
for(let i = 0; i <deleteButton.length; i++) {
    deleteButton[i].addEventListener("click",function(){
        bigDiv[i].remove()
        sum.innerHTML= parseInt(sum.innerHTML)-parseInt(prices[i].innerHTML)*parseInt(count[i].innerHTML)
    })
}
heart.addEventListener("click",() => {
    animationheart.classList.add('animation');
    heart.classList.add('fill-color');

})
animationheart.addEventListener("click",() =>
{
    animationheart.classList.remove('animation');
    heart.classList.remove('fill-color');
    
})

