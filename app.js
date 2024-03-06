'use strict'
const api = "https://api.quotable.io/random"
const cards = document.querySelector(".quote-box")

const btn = document.querySelector(".btn")
const author = document.querySelector(".author")
const content = document.querySelector(".quote")
async function Quotegenerato(){
  try{
    const res = await fetch(api)
    const data = await res.json()
    author.innerHTML = data.author
content.innerHTML = data.content
  }
   catch(error){
    console.log('something went wrong', error);

   }
}
Quotegenerato(api)
btn.addEventListener("click", Quotegenerato);





















