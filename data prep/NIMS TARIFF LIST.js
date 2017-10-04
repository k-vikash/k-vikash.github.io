var data='';
// export the data in CSV file formate and download on call of the function onload
function exportToCsv(filename, rows) {
        var processRow = function (row) {
            var finalVal = '';
            var result='';
            for (var j = 0; j < row.length; j++) {
            	result=row[j].trim(); // remove the whitespaces in the string
            	if (result.search(/("|,|\n)/g) >= 0 )// s
                    result = '"' + result + '"';
               if(j!=0){
            	 	finalVal +=",";
            	 }
           finalVal += result;
            
            }
            return finalVal + '\n';
        };

        var csvFile = '';
        for (var i = 0; i < rows.length; i++) {
            csvFile += processRow(rows[i]);
        }
        csvFile ="\ufeff" + csvFile;  // \ufeff to read csv data string file properly
        var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }  
// function which is generating the array of the data
function extractData(){
	data=document.getElementsByClassName('MsoPlainText');
	var csv=[]; 

	var i=0;
	var y='';
	var p='';
	var obj=["CODE","DESCRIPTION", "RATE","DEPARTMENT"];
	csv.push(obj);
	while (i<data.length) {
	  y= data[i].innerText;
	 if(y.indexOf('DEPARTMENT OF')!==-1){ //check for department name

	 	     p= y.replace("------", "");
    		 for ( var k =(i+1);k<data.length;k++) {
    		 	var arr=[];
    		 	if((data[k].innerText).indexOf('DEPARTMENT OF')!==-1 ){
    		 		i=k-1;
    		 		break;
    		 	
    		 	}else if((data[k].innerText).indexOf('=====')!==-1 || (data[k].innerText).indexOf('----')!==-1 || (data[k].innerText).indexOf('CODE')!==-1 ){
    		 		continue;
    		 	}else if((data[k].innerText).indexOf('ACCOMMODATION CHARGES')!==-1){
    		 		exportToCsv('export.csv', csv);	//eaport the data in csv format
 	
 	         			return;
    		 	}
    		 		arr[0]= (data[k].innerText).substring(0,8);
    		 		if(arr[0].trim()===""){ // to avoid blank space after department
    		 			continue;
    		 		}
    		 		arr[1]= (data[k].innerText).substring(8, 59);
    		 		arr[2]= (data[k].innerText).substring(59, 70);
    		 		arr[3]=p;
    		 
    		      csv.push(arr);
    		 
    		 }
    		
 	}
 	i++;
	}
	}  
