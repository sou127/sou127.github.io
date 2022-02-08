$(document).ready(function(){
    var count = 10;
    var data = {
        labels : ["1","2","3","4","5", "6", "7", "8", "9", "10"],
          datasets : [
            {
                  fillColor : "#f0492b",
                  strokeColor : "black",
                  pointColor : "red",
                  pointStrokeColor : "gray",
                  data : [28,48,40,19,96,87,66,97,92,85]
              },
              {
                  fillColor : "transparent",
                  strokeColor : "transparent",
                  pointColor : "transparent",
                  pointStrokeColor : "transparent",
                  data : [28,48,40,19,96,87,66,97,92,85]
              }
          ]
    }
    var updateData = function(oldData){
      var labels = oldData["labels"];
      var dataSetA = oldData["datasets"][0]["data"];
      var dataSetB = oldData["datasets"][1]["data"];

      console.log(dataSetA, dataSetB);
  
      labels.shift();
      count++;
      labels.push(count.toString());
      var max = 150;
      var min = 60;

      var newDataB = Math.floor(Math.random() * (max - min + 1) + min);

      var newDataA = Math.floor(Math.random() * (max - min + 1) + min);
      console.log(newDataA);

      document.getElementById("bpmval").innerHTML = newDataA;
      if ((newDataA) >= 120 || (newDataA <= 80)){
        document.getElementById("bpmval").setAttribute("style", "color:red;");
        document.getElementById("genkika").innerHTML = "不良🤒";
        document.getElementById("genkika").setAttribute("style", "color:red;");
      } else {
        document.getElementById("bpmval").setAttribute("style", "color:blue;");
        document.getElementById("genkika").innerHTML = "元気😀";
        document.getElementById("genkika").setAttribute("style", "color:blue;");
      }
      dataSetA.push(newDataA);
      dataSetB.push(newDataB);
      dataSetA.shift();
      dataSetB.shift();    
    };
  
    var optionsAnimation = {
      scaleOverride : true,
      scaleSteps : 10,
      scaleStepWidth : 10,
      scaleStartValue : 0
    }
    var optionsNoAnimation = {
      animation : false,
      scaleOverride : true,
      scaleSteps : 20,
      scaleStepWidth : 10,
      scaleStartValue : 0
    }
  
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var optionsNoAnimation = {animation : false}
    var myNewChart = new Chart(ctx);
    myNewChart.Line(data, optionsAnimation);  
  
    setInterval(function(){
      updateData(data);
      myNewChart.Line(data, optionsNoAnimation)
      ;}, 2000
    );
});