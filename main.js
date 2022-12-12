let offset = 0;
i =1
mas=[true,false,false,false]
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
 
  i++
  if (i==5){
    i=1
  }
  mas[i-1]=true;
  if (mas[0] && mas[1] && mas[2] && mas[3]){
    document.getElementById('one').removeAttribute('disabled')
  }
  
  offset += 305;
  if(offset > 915){
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){

  i--
  if (i==0){
    i=4
  }
  mas[i-1]=true;
  if (mas[0] && mas[1] && mas[2] && mas[3]){
    document.getElementById('one').removeAttribute('disabled');
  }
  
  offset -= 305;
  if(offset < 0){
    offset = 915;
  }
  sliderLine.style.left = -offset + 'px';
});
