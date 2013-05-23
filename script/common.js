function changeBackground(a_id)
{
	var image_url='images/model_08.png';
	switch(a_id)
	{
		case 1:image_url='images/model_08.png';
		break;
		
		case 2:image_url='images/col1.png';
		break;
		
		case 3:image_url='images/logo1.png';
		break;
		
		case 4:image_url='images/col2.png';
		break;
		
	}
	document.getElementById("model").style.background ='url("'+image_url+'")'; 
	var items = document.getElementById('buttons').getElementsByTagName('a'),i,str; 
    for (i=0;i<items.length;i++)
    {
		str=items[i].className;
		if(str.indexOf('active_bullet') != -1) 
		{
			items[i].className = items[i].className.replace(/\bactive_bullet\b/,'');
		}
		if(i==(a_id-1))
		{
			items[i].className += " active_bullet";
		}
	}

}

var c=1;
var t;
function start_changebg()
{
	if(c==5)
	{
		c=1;
	}
changeBackground(c++);
t=setTimeout("start_changebg()",6000);
}
