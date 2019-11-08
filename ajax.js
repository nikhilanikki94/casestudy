 $(document).ready(function(){
    $("#nav").click(function(){
     $.ajax({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(data){
            
                $("body").html(data.title);
            },
            
            error:function(xhr,status,error){

            }
     })
 })
})