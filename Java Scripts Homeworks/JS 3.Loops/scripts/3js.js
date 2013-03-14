var arrSize = 7;  
var myarray = new Array();
var biggest;
var smallest;
var count = 0;

for(var i=0;i<arrSize;i++){  
//add arrSizes in array
	function insert(val){ 
	myarray[myarray.length]=val;
  	count++;
              
		if (count==arrSize){     			
			biggest = myarray[0];
			smallest = myarray[0];
			  
			for (var i = 0; i < arrSize; i++){
				if (myarray[i] > biggest){
					biggest = myarray[i];
				}
				else if (myarray[i] < smallest){
					smallest = myarray[i];
				}
			}			
			//input result and array
			onPrint("Array of enter numbers")
			show();     
			onPrint("Result of smallest number");
			onPrint(smallest);
			console.log(smallest);  
			onPrint("Result of biggest number");
			onPrint(biggest);
			console.log(biggest); 
		}
	}
}

//function to create paragraph and show numbers
function onPrint(i){
	var newNode = document.createElement("p");
	newNode.appendChild(document.createTextNode(i));
	var refNode = document.getElementById("result");
	refNode.parentNode.insertBefore(newNode, refNode); 
}

//print enter number in the array
function show(){
	var newNode = document.createElement("p"); 
	for(var i=0;i<myarray.length;i++){      
		newNode.appendChild(document.createTextNode(myarray[i] + " "));
	}
	var refNode = document.getElementById("result");
	refNode.parentNode.insertBefore(newNode, refNode); 
}