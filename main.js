

function createList(description, link, list_ul, timestamp) {
	li = document.createElement("li");
	li.classList.add('list-group-item');
	li.classList.add('d-flex');
	li.classList.add('justify-content-between');
	li.classList.add('align-items-center');

	descriptionLabel = document.createTextNode(description.value);

	spanLink = document.createElement("span");
	spanLink.classList.add("badge");
	spanLink.classList.add("badge-dark");
	spanLink_label = document.createTextNode("Go to the page");
	spanLink.appendChild(spanLink_label);

	spanTime = document.createElement("span");
	spanTime.classList.add("badge");
	spanTime.classList.add("badge-light");
	spanTime.classList.add("badge-pill");
	spanTime_label = document.createTextNode(timestamp);
	spanTime.appendChild(spanTime_label);

	a = document.createElement("a");
	a.href = link.value;
	a.target = "_blank";


	a.appendChild(spanLink);

	li.appendChild(spanTime);
	li.appendChild(descriptionLabel);
	li.appendChild(a);
	// li.appendChild(spanTime);

	list_ul.appendChild(li);

}



function noRepeat(list_ul, link) {
	li_list = list_ul.childNodes;
	href_list = [];

	for (var i = 0; i < li_list.length; i++) {
		li_child = li_list[i].childNodes;
		if (i>=1) {
			href_list.push(li_child[2].href);
		}
	}

	linkcheck = href_list.includes(link.value);

	return linkcheck;
}


function buttonclick(e) {
	
	const description = document.querySelector('#description');
	const link = document.querySelector('#link');
	const error = document.getElementById('errorMessage');
	var list_ul = document.querySelector('#taskList');



	var now = new Date();
	timestamp = ((now.getHours() < 10) ? ("0" + now.getHours()) : now.getHours())+ 
				':' + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : now.getMinutes()) +
				 ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : now.getSeconds());

	if(description.value != "" && link.value !=""){
		if (noRepeat(list_ul, link)) {
			alert('You already have that link');
		}
		else {
			createList(description, link, list_ul, timestamp);
		}	
		
	}
	else{
		error.innerHTML = 'put in some value mah ni**a';
		description.classList.add('border-danger');
		link.classList.add('border-danger')
		setTimeout( (e) => 
			{error.innerHTML = "";
			description.classList.remove('border-danger');
			link.classList.remove('border-danger')}, 
			3000);
	}


	description.value = ""
	link.value = ""
}