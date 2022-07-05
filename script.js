//Function to update value "on change" for the Interest rates slide
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval+"%";
}

//Function to process and display values of interest rate
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    if(principal<=0)
    {
        document.getElementById("principal").focus;
        document.getElementById("resultA").innerHTML="";
        document.getElementById("deposit").innerHTML="";
        document.getElementById("resultB").innerHTML="";
        document.getElementById("rates").innerHTML="";
        document.getElementById("resultC").innerHTML="";
        document.getElementById("interests").innerHTML="";
        document.getElementById("resultD").innerHTML="";
        document.getElementById("Years").innerHTML="";
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        document.getElementById("resultA").innerHTML="If you deposit ";
        document.getElementById("deposit").innerHTML=principal;
        document.getElementById("resultB").innerHTML="\<br\>At an interest rate of ";
        document.getElementById("rates").innerHTML=rate+"%";
        document.getElementById("resultC").innerHTML="\<br\>You will receive an amount of ";
        document.getElementById("interests").innerHTML=interest;
        document.getElementById("resultD").innerHTML=",\<br\>in the year ";
        document.getElementById("Years").innerHTML=year+"\<br\>";
    }
    ;
}