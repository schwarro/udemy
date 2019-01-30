//Check off specific items by clicking
// $("li").click(function(){
//   $(this).toggleClass("completed");
//
//   // if($(this).css("color") === "rgb(128, 128, 128)"){
//   //   $(this).css({
//   //     color: "black",
//   //     textDecoration: "none"
//   //   });
//   // } else {
//   //   $(this).css({
//   //     color: "gray",
//   //     textDecoration: "line-through"
//   //   });
//   // }
// });

$("ul").on("click", "li", (function(){
    $(this).toggleClass("completed");
}));


//click on X to delete todo
// $("span").click(function(e){
//   //stops event from working on li
//   $(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	e.stopPropagation();
// });
$("ul").on("click", "span", (function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
}));

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    //grabing new todo from input
    let newTodo = $(this).val();
    //create new li with new todo
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    $(this).val("");
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
