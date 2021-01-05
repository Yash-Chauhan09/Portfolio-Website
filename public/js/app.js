
let theme = localStorage.getItem('theme');
if(theme == null){
    setTheme('light')
}
else{
    setTheme(theme)
}

let themedot = document.getElementsByClassName('themedot');
for(let i = 0; themedot.length>i;i++){
    themedot[i].addEventListener('click',function(){
     let mode = this.dataset.mode
     console.log('option clicked',mode);
     setTheme(mode);
    })
}
function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('themestyle').href = 'css/style.css'
    }
    if(mode === 'blue'){
        document.getElementById('themestyle').href = 'css/blue.css'
    }
    if(mode === 'green'){
        document.getElementById('themestyle').href = 'css/green.css'
    }
    if(mode === 'purple'){
        document.getElementById('themestyle').href = 'css/purple.css'
    }
    localStorage.setItem('theme',mode);
}
const submitted = ()=>{
alert('Your message has been recieved:)')
}