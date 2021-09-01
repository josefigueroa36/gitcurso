const btn=document.getElementById('btnmenu'),
      menu=document.getElementById('menu')
      
      
      
      btn.addEventListener('click',()=>{
        menu.classList.toggle('menuActive')
      })