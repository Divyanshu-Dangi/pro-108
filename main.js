https://teachablemachine.withgoogle.com/models/k_nOySFkU/

function startclassification()
{

navigator.mediaDevices.getUserMedia({
audio:true    
});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/k_nOySFkU/model.json',modelloaded);
}
function modelloaded()
{
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if (error)
    {
console.error(error);
    }
    else{
        console.log(results);
        ramdom_number_r=Math.floor(Math.random()*255)+1;
        ramdom_number_g=Math.floor(Math.random()*255)+1;
        ramdom_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
        document.getElementById("result_label").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
        document.getElementById("result_accuracy").innerHTML="Accuracy "+results[0].confidence.toFixed(2);
        document.getElementById("result_accuracy").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_b+")";
        
        Image1=document.getElementById("alien1");
        Image2=document.getElementById("alien2");
        Image3=document.getElementById("alien3");
        Image4=document.getElementById("alien4");

        if(results[0].label=="clap")
        {
        Image1.src="aliens-01.gif"; 
        Image2.src="aliens-02.png";    
        Image3.src="aliens-03.png";    
        Image4.src="aliens-04.png";       
        }
        else   if(results[0].label=="snap")
        {
        Image1.src="aliens-01.png"; 
        Image2.src="aliens-02.gif";    
        Image3.src="aliens-03.png";    
        Image4.src="aliens-04.png";       
        }
      else  if(results[0].label=="bell")
        {
        Image1.src="aliens-01.png"; 
        Image2.src="aliens-02.png";    
        Image3.src="aliens-03.gif";    
        Image4.src="aliens-04.png";       
        }
        else  
        {
        Image1.src="aliens-01.png"; 
        Image2.src="aliens-02.png";    
        Image3.src="aliens-03.png";    
        Image4.src="aliens-04.gif";       
        }
    }
}