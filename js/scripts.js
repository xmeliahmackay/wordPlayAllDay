$(document).ready(function() {
  $("form#sentence").submit(function(){
    event.preventDefault();
    var wordss = $("input#choice").val();
    console.log(wordss);
    //$(".theirSentence").text(wordss);
    var wordString = wordss.split(' ');
    console.log(wordString);
    var skkkirp = wordString.reverse().join('-');
    console.log(skkkirp);
    $(".theirSentence").text(skkkirp);
  
  })
});