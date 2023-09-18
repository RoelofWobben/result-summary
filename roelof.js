//lezen van het bestand 

var total = 0; 
var total_numbers = 0; 

fetch('./data.json')
 .then( (response) => response.json())
 .then( (json) => {
    json.forEach(element => {
      var div = document.createElement('div'); 
      div.classList.add('card'); 
      div.classList.add(element.category.toLowerCase());
      
      var left = document.createElement('div');
      left.classList.add('left');
      
      var image = document.createElement('img'); 
      image.src = element.icon; 
      left.appendChild(image);
      
      var p_left = document.createElement('p'); 
      p_left.innerHTML = element.category; 
      left.appendChild(p_left); 
      
      div.appendChild(left);
      
      var right = document.createElement('div');
      right.classList.add('right');  

      var span = document.createElement('span'); 
      span.classList.add('bold'); 
      span.innerHTML = element.score;
      
      total += element.score;
      total_numbers += 1;  

      right.appendChild(span);

      var p_right = document.createElement('p'); 
      p_right.innerHTML = ' / 100';
      
      right.appendChild(p_right); 

      
      div.appendChild(right);
      
      document.querySelector('.details').appendChild(div); 
   }); 
   
   var btn = document.createElement('button'); 
   btn.classList.add('btn'); 
   btn.innerHTML = 'Continue'; 
   var test = document.querySelector('.details').appendChild(btn); 

   var average = Math.floor(total / total_numbers) ; 

   document.querySelector('.result').innerHTML = average;  
  
});






