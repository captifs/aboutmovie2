
var movie;
$(document).ready(function(){
  
 

$('#ab').on('submit',function(e){


 let val=$('input').val();

$('#display2').hide();

 getmovies(val);
 e.preventDefault();




})

});





function getmovies(val){
$.ajax({

    url:"http://www.omdbapi.com/?apikey=1913236a&s="+val,


    method:'GET',
  



     success:function(data){
       
       var output='';
       $.each(data.Search , function(index,val){

        //  console.log(val);


     

  
  output += `
  <div class="col-md-3">
    <div id='we' class="well text-center">
      <img id ='img1'   src="${val.Poster}">
      <h4 id='title'>${val.Title}</h4>
      <a onclick="movie('${val.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
    </div>
  </div>
`;
});
  
 
//   '<div class="col-md-3">'+


//   '<img src="${val.Poster}"></img>'
// +

//   '<h5>'+ val.Title+'</h5>'

//   +

//   '<a href="val.imdbID">IMDB</a>'+
  
//  '</div>'


      
        

       $('#display').append(output);
                                        
     }
          

     
   
});




movie=function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie2.html';
  return false;
}

}


function  getmovie(){


var movieid=sessionStorage.getItem('movieId');

$.ajax({

  url:"http://www.omdbapi.com/?apikey=1913236a&i="+movieid,


  method:'GET',




   success:function(data){
     
    var val=data;
     var output='';
    

   


output += `
<div class="jumbotron">
<div class='row' id='row1'>

<div class= 'col-md-4'>

<img id ='pos'src="${val.Poster}" class="thumbnail">

</div>

 <div class="col-md-8">
  <h2 >Title: ${val.Title}</h2>

<ul class='list-group' id='list-group1'>
 <span id='plot'>

<li class='list-group-item'><b> Description: ${val.Plot}</b></li>
<li class='list-group-item'><strong>Date:${val.Released}</strong></li>
<li class='list-group-item'><b>Genre:${val.Genre}</b></li>
<li class='list-group-item'><b>Rated:${val.Rated}</b></li>
<li class='list-group-item'><b>Rating: ${val.imdbRating}</b></li>
</ul>
</div>
</div>
</div>
<div class="jumbotron">
<div class="row" >


</span>



 <a  id='a2' href="https://movies-info1.abhinavgupt57.now.sh/"  class="btn btn-danger"><b>Go Back To Search</b></a>


 </div>
</div>
`;



$('#display1').append(output);


}





});







   }


  






