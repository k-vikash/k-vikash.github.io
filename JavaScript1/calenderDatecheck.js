var dd1='';
var mm1='';
var yyyy1='';
function currentDate(){
		var today = new Date();
 		dd1 = today.getDate();
 		mm1 = today.getMonth()+1; 
		yyyy1 = today.getFullYear();
		if(dd1<10) 
		{
    		dd1='0'+dd1;
		} 
		if(mm1<10) 
		{
    		mm1='0'+mm1;
		} 
}

function validatedate(inputText)
{
	var dateformat=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

	if(inputText.match(dateformat))
	{
		
		//document.form1.text1.focus();
		var opera1=inputText.split('/');
		var opera2=inputText.split('-');
		lopera1=opera1.length;
		lopera2=opera2.length;
		if(lopera1>1){var pdate=inputText.split('/');}
		else if(lopera2>1)
		{var pdate=inputText.split('-');}
		var dd=parseInt(pdate[0]);
		var mm=parseInt(pdate[1]);
		var yy=parseInt(pdate[2]);
		var ListofDays=[31,28,31,30,31,30,31,31,30,31,30,31];
		if(mm==1||mm>2){
			if(dd>ListofDays[mm-1]){
				alert('Invalid date format!');
				return false;
			}
		}
		if(mm==2){
			var lyear=false;
			if((!(yy%4)&&yy%100)||!(yy%400)){
				lyear=true;
				}
			if((lyear==false)&&(dd>=29))
			{
				alert('Invalid date format!');
				return false;
			}if((lyear==true)&&(dd>29))
			{
				alert('Invalid date format!');
				return false;}
			}
		}
		else
		{
			alert("Invalid date format!");
			//document.form1.text1.focus();
			return false;
		}
		currentDate();
		if((yy > yyyy1) || ((yy==yyyy1)&& ((mm >mm1)))||((yy==yyyy1) && (mm == mm1)&& (dd >=dd1))){
			alert('Date is in future');
			return false;
		}
		return true;
}
