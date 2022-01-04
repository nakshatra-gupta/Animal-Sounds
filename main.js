function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HodkpC6Yh/model.json", model_loaded);
}
function model_loaded()
{
    classifier.classify(gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
     console.error(error);    
    }
    else
    {
        console.log(results);
        random_Number_r = Math.floor(Math.random()*255)+1;
        random_Number_g = Math.floor(Math.random()*255)+1;
        random_Number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = "The detected noise is - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + ((results[0].confidence)*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_Number_r +", "+ random_Number_g +", "+ random_Number_b +")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_Number_r +", "+ random_Number_g +", "+ random_Number_b +")";

        img1 = document.getElementById("img1");

       if  (results[0].label == "Background Noise")
       {
           img1.src = 'listen.gif';
       } 
       else if  (results[0].label == "Cat")
       {
           img1.src = 'meow.gif';
       } 
       else if  (results[0].label == "Dog")
       {
           img1.src = 'bark.gif';
       } 
    }
}