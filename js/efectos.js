const i=document.getElementById('i')

document.getElementById('body').addEventListener('click',()=>{
  i.classList.toggle('trans')
})
sessionStorage.setItem('name','miguel')
console.log(sessionStorage.getItem('name'))