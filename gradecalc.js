function arrSplit(string){
    var arr = string.split(",");
    for(var i = 0 ; i < arr.length; i++){
        arr[i]=parseInt(arr[i])
    }
    console.log(arr);
    return arr;
}

function avgArr(arr) {
    var count = 0;
    var avgCount = 0;
    for (var i = 0; i < arr.length; i++) {
        count += arr[i]
    }
    avgCount = count/ arr.length;
    console.log(avgCount);
    return avgCount
}





function calculate() {
//homework
    var homeworkGrade = document.getElementById('homeworkGrade').value;
    var homeworkarr = arrSplit(homeworkGrade);
    var homeworkavg = avgArr(homeworkarr);
    var homeworkWeight = (parseInt(document.getElementById('homeworkWeight').value)) / 100;
    console.log(homeworkavg);
    var homework = homeworkavg * homeworkWeight;

//project
    var ProjectGrade = document.getElementById('ProjectGrade').value;
    var ProjectWeight = (parseInt(document.getElementById('ProjectWeight').value)) / 100;
    var Projectarr = arrSplit(ProjectGrade);
    var Projectavg = avgArr(Projectarr);
    var Project = Projectavg * ProjectWeight;

//test
    var TestGrade = document.getElementById('TestGrade').value;
    var TestWeight = (parseInt(document.getElementById('TestWeight').value)) / 100;
    var Testarr = arrSplit(TestGrade);
    var Testavg = avgArr(Testarr);
    var Test = Testavg * TestWeight;

//particpation
    var ParticipationGrade = document.getElementById('ParticipationGrade').value;
    var ParticipationWeight = (parseInt(document.getElementById('ParticipationWeight').value)) / 100;
    var participationarr = arrSplit(ParticipationGrade);
    var Participationavg = avgArr(participationarr);
    var Participation = Participationavg * ProjectWeight;

//classwork
    var ClassworkGrade = document.getElementById('ClassworkGrade').value;
    var ClassworkWeight = (parseInt(document.getElementById('ClassworkWeight').value)) / 100;
    var Classworkarr = arrSplit(ClassworkGrade);
    var classworkavg = avgArr(Classworkarr);
    var Classwork = ClassworkWeight * classworkavg;



    var desiredGrade = document.getElementById('Desire').value;

    var finalWeight = (parseInt (document.getElementById('Final').value)) / 100;


    var totalWeight = homeworkWeight + ProjectWeight + ParticipationWeight + ClassworkWeight + TestWeight + finalWeight;
    var currentGrade = homework + Project + Participation + Classwork + Test;
    var currentGraderound = Math.round(currentGrade);

    coloring(1,homeworkavg);
    coloring(2,Projectavg);
    coloring(3,Testavg);
    coloring(4,Participationavg);
    coloring(5,classworkavg);


    if (totalWeight != 1) {
        document.getElementById('currentGrade').innerHTML = "Please make sure your weights add up to 100."
    } else {
        if(isNaN(currentGraderound)){
            document.getElementById('currentGrade').innerHTML = "Please ensure that you inserted correct information";
        }
        document.getElementById('currentGrade').innerHTML = "Your grade is " + currentGraderound + "%";
    }
    return currentGraderound;
}


function FinalCalc() {
    var currentGrade = calculate();
    console.log(currentGrade);
    var desire = document.getElementById('Desire').value;
    var finalWeight = (parseInt(document.getElementById('Final').value));
    var currentPercent = currentGrade / 100;
    var totalWeight = currentPercent * (100 - finalWeight);
    var amountNeeded = desire - totalWeight;
    var percentNeeded = amountNeeded / finalWeight;
    var gradeNeeded = percentNeeded * 100;
    var need = Math.ceil(gradeNeeded);
    if (isNaN(need)) {
        document.getElementById('desireGrade').innerHTML = "Please ensure that you inserted correct information";
    } else {
        document.getElementById('desireGrade').innerHTML = "You need a " + need + "%";
    }
}


function Reset(){
    document.getElementById('homeworkGrade').value = "";
    document.getElementById('homeworkWeight').value = "";
    document.getElementById('ProjectGrade').value = "";
    document.getElementById('ProjectWeight').value = "";
    document.getElementById('TestGrade').value = "";
    document.getElementById('TestWeight').value = "";
    document.getElementById('ParticipationGrade').value = "";
    document.getElementById('ParticipationWeight').value = "";
    document.getElementById('ClassworkGrade').value = "";
    document.getElementById('ClassworkWeight').value = "";
    document.getElementById('Desire').value = "";
    document.getElementById('Final').value = "";
    document.getElementById(1).style.backgroundColor = "";
    document.getElementById(2).style.backgroundColor = "";
    document.getElementById(3).style.backgroundColor = "";
    document.getElementById(4).style.backgroundColor = "";
    document.getElementById(5).style.backgroundColor = "";
    document.getElementById('desireGrade').innerHTML = "";
    document.getElementById('currentGrade').innerHTML = "";
}

function coloring(row , avg) {
    if(avg >= 90){
    document.getElementById(row).style.backgroundColor = "#00FF00";
    }
    if(avg >= 80 && avg < 90){
        document.getElementById(row).style.backgroundColor = "#0000FF";
    }
    if(avg >= 70 && avg < 80){
        document.getElementById(row).style.backgroundColor = "#FFDE02";
    }
    if(avg >= 60 && avg < 70){
        document.getElementById(row).style.backgroundColor = "#FB7A24";
    }
    if(avg < 60){
        document.getElementById(row).style.backgroundColor = "#FF0000";
    }
}