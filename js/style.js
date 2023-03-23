const hamburger =()=>{
    console.log('news');
    var menushow = document.getElementById('open_menu');
    if(menushow.style.display === 'none'){
        menushow.style.display = "block"
    }else{
        menushow.style.display = 'none';
    }
}