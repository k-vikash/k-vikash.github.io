
  var catchId='';
  var indexNo='';
  function catchTheValue(objectid){
          catchId=objectid.value;
  }
  function addImagefunc(){
  
      var nUrl=document.getElementById('url').value;
        var nName=document.getElementById('name').value;
        var nInformation=document.getElementById('information').value;
        var nUdate=document.getElementById('uDate').value;
        if(nUrl.match(/\.(jpeg|jpg|gif|png)$/)==null){
          alert("Invalid Image Url!!");
          return false;
        }
        if(nName=="")
        {
          alert("Image Name must be filled!!");
          return false;
        }
        if(nInformation==""){
          alert("information must be filled!!");
          return false;
        } 
        if(validatedate(nUdate)===false){
          alert("invalid date!!");
          return false;
        }
         if(catchId=="Add Image"){
     // addImage();
      arr.push({
          "url" : nUrl,
          "imgId" :nName,
          "caption" :nInformation,
          "Uploaded Date" :nUdate
        });
    }else{
      //alert("here");
        arr[indexNo].url=nUrl;
        arr[indexNo].imgId=nName;
        arr[indexNo].caption=nInformation;
        arr[indexNo].uploadDate=nUdate;
      }
      myFunction(arr);
  }
  function imagePop(element){
        var dta= element.src;
        var modal=document.getElementById('myModal');
        var imgInd=document.getElementById('img01');
        modal.style.display = "block";
        imgInd.src = dta;

        var spanClose = document.getElementsByClassName("closeN")[0];
        var spanDelete=document.getElementsByClassName("delete")[0];
        var spanEdit=document.getElementsByClassName("button")[0];

         // When the user clicks on <span> (x), close the modal
        spanClose.onclick = function() { 
          modal.style.display = "none";
        }
      //edit
         var n=dta.replace('https://k-vikash.github.io/JavaScript1','');
     spanEdit.onclick=function(){

          modal.style.display= "none";
          document.getElementById('url').value=n;
          for(var i=0;i<arr.length;i++){
              if(arr[i].url===n){
                document.getElementById('name').value=arr[i].imgId;
                document.getElementById('information').value=arr[i].caption;
                document.getElementById('uDate').value=arr[i].uploadDate;
                indexNo= i;
                return;
              }
          }
      }

      //delete
      
      spanDelete.onclick= function(){

         if(confirm("Are you sure to delete this item!!")){

             for(var i=0; i<arr.length;i++){

             console.log(dta + " " +arr[i].url );
                    if(arr[i].url===n){
                       arr.splice(i,1);
                       alert("image successfully delete");
                       modal.style.display= "none";
                       myFunction(arr);
                       return;
                    }
             }
         }else{
             alert("You have cancel the process of deletion");
             modal.style.display= "none";
         }
      }


  }
