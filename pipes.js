/*
 * Script for accesing yahoo pipes
 * @requires jQuery($), jQuery UI & sortable/draggable UI modules
@created by pranay airan
 */

function androidfeed(o){  
 
         var anditems = o.value.items;  
         
      
for(var j=0;j<10;j++)
{  
       
        var title = anditems[j].title;  
		var link = anditems[j].link;
 var content = anditems[j].description;
        
document.getElementById('androidtitle'+(j+1)).innerHTML = title;
document.getElementById('androidlink'+(j+1)).href=link;
document.getElementById('androidlink'+(j+1)).innerHTML=title;
document.getElementById('androiddescription'+(j+1)).innerHTML = content;
}
};

function renderfeed(o){  
 
         var items = o.value.items;  
         var no_items=items.length;  
      
for(var i=0;i<10;i++)
{  
        var content = items[i].description;
        var title = items[i].title;  
		var link = items[i].link;

document.getElementById('title'+(i+1)).innerHTML = title;
document.getElementById('link'+(i+1)).href=link;
document.getElementById('link'+(i+1)).innerHTML=title;
document.getElementById('description'+(i+1)).innerHTML = content;
}
};


function toolkitfeed(o){  
 
         var toolkititems = o.value.items;  
         
      
for(var j=0;j<10;j++)
{  
       
        var title = toolkititems[j].title;  
		var link = toolkititems[j].link;
 var content = toolkititems[j].description;
        
document.getElementById('toolkittitle'+(j+1)).innerHTML = title;
document.getElementById('toolkitlink'+(j+1)).href=link;
document.getElementById('toolkitlink'+(j+1)).innerHTML=title;
document.getElementById('toolkitdescription'+(j+1)).innerHTML = content;
}
};

function codefeed(o){  
 
         var codeitems = o.value.items;  
         
      
for(var j=0;j<10;j++)
{  
       
        var title = codeitems[j].title;  
		var link = codeitems[j].link;
 var content = codeitems[j].description;
        
document.getElementById('codetitle'+(j+1)).innerHTML = title;
document.getElementById('codelink'+(j+1)).href=link;
document.getElementById('codelink'+(j+1)).innerHTML=title;
document.getElementById('codedescription'+(j+1)).innerHTML = content;
}
};

function opensocialfeed(o){  
 
         var opensocialitems = o.value.items;  
         
      
for(var j=0;j<10;j++)
{  
       
        var title = opensocialitems[j].title;  
		var link = opensocialitems[j].link;
 var content = opensocialitems[j].description;
        
document.getElementById('opensocialtitle'+(j+1)).innerHTML = title;
document.getElementById('opensociallink'+(j+1)).href=link;
document.getElementById('opensociallink'+(j+1)).innerHTML=title;
document.getElementById('opensocialdescription'+(j+1)).innerHTML = content;
}
};

function appengfeed(o){  
 
         var appengitems = o.value.items;  
         
      
for(var j=0;j<10;j++)
{  
       
        var title =appengitems[j].title;  
		var link = appengitems[j].link;
 var content = appengitems[j].description;
        
document.getElementById('appengtitle'+(j+1)).innerHTML = title;
document.getElementById('appenglink'+(j+1)).href=link;
document.getElementById('appenglink'+(j+1)).innerHTML=title;
document.getElementById('appengdescription'+(j+1)).innerHTML = content;
}
};

function opensourcefeed(o){  
 
         var opensourceitems = o.value.items;  
         
      
for(var j=0;j<10;j++)
{  
       
        var title =opensourceitems[j].title;  
		var link = opensourceitems[j].link;
 var content = opensourceitems[j].description;
        
document.getElementById('opensourcetitle'+(j+1)).innerHTML = title;
document.getElementById('opensourcelink'+(j+1)).href=link;
document.getElementById('opensourcelink'+(j+1)).innerHTML=title;
document.getElementById('opensourcedescription'+(j+1)).innerHTML = content;
}
};