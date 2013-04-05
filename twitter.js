/*  author: Bekir Ozgunlu
	date  : March 2013
*/
var timer;
function search_tweet(){	
	document.getElementById("tweet_table").innerHTML = "";           
   	var input = document.getElementById('search_this');
   	var search_text = input.value;
	if (!search_text || search_text=="Search...")   {
		alert("Please enter text!");
	}
	else{					
		$.getJSON("http://search.twitter.com/search.json?callback=?&q="+search_text,
			function(data){				
				for (i=0; i<5 ; i++){
					$("#tweet_table").append( "<tr class=row id=row"+i+">");												
					$("#row"+i).append( "<td class=image id=image"+i+"></td>");												
					add_image(data.results[i].profile_image_url, i);									
					$("#row"+i).append( "<td class=info id=info"+i+"></td>");	
					$("#info"+i).append("<tr class=child_row><td><strong>"+data.results[i].from_user_name+"</strong>"+
										"<i> @" + data.results[i].from_user+"</i>"+
										" <strong>  " + data.results[i].created_at +"</strong></td></tr>"+										
										"<tr class=child_row><td>" +	 									
						                "<p>"+data.results[i].text.replace(/#(.*?)(\s|$)/g, '<span class="hash">#$1 </span>')
						                    .replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a target="_blank" href="$&">$&</a> ')
						                    .replace(/@(.*?)(\s|\(|\)|$)/g, '<a target="_blank" href="http://twitter.com/$1">@$1 </a>$2') +	"</p>"
										+"</td></tr>"										
										);													
				}
			}
		);
	}	
	timer = setTimeout("search_tweet()",10000);
}
function clear_text(input)
{ 
	if (input.value == "Search..."){
		input.value = "";        
	}    	unc
    clearTimeout(timer);
}    
 function add_image(src,i) { 		
    var img = document.createElement("img");
    img.src = src;        
    img.id = "userimage";                             
    document.getElementById("image"+i).appendChild(img);       
}
