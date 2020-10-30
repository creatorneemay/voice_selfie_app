var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speekdata="taking your selfie in five seconds";
    var utter=new SpeechSynthesisUtterance(speekdata);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function (){
        takesnapshot();
        //not in new app
        save();
        //not in new app
    },5000)
}
Webcam.set({
    width:360, height:250, image_format:'png', png_quality:99
});
camera=document.getElementById("output");
function takesnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_url+"'>";
    })
}
//not in new app
function save(){
    link=document.getElementById("link")
    img=document.getElementById("selfie_image").src;
    link.href=img
    link.click();
}
//not in new app