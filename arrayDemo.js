/*var arr=new Array(12,24,36);
console.log("Length of array " +arr.length);
sum=0;
for(var i=0;i<arr.length;i++)
{
	sum+=arr[i];
}
console.log("Sum : "+sum);

*----------------------------------------------*

*/

var arr=[10,20,30,40,50,10,20,10];
var flag=true;
for(var i=0;i<arr.length;i++)
{
	if(arr[i]==10)
	{
		console.log("Match found at position "+i);
		flag=false;
	}
}
if(flag==true)
{
	console.log("Not found");
}