$(document).ready(function() {
    $("input[name$='vehicle']").click(function() {
        var test = $(this).val();
	if(test == "year"){
		$("div#year").show();
		$("div#candidate").hide();
	}
	else{
		$("div#year").hide();
		$("div#candidate").show();
	}
        
    });
    $("#comsel").change(function(){
	var coms = document.getElementById("comsel");
	var comn = document.getElementById("comname");
	comn.value = coms.options[coms.selectedIndex].text;
	var text = coms.options[coms.selectedIndex].text;
	if(text == "ACAD")
			comn.value = "Academics";
	else if(text == "SPOR")
			comn.value = "Sports";
	else if(text == "CULT")
			comn.value = "Cultural";
	else if (text == "ANNL")
			comn.value = "Annual";
	else if(text == "HOST")
			comn.value = "Hostel";
	else if(text == "PLAC")
			comn.value = "Placement";
	else if (text == "CAFE")
		comn.value = "Cafetaria";
});
    $("#subc").click(function(){
	var name = document.getElementById("name").value;
	var id = document.getElementById("id").value;
	var no = document.getElementById("no").value;
	var batc = document.getElementById("btc").value;
	var batn = document.getElementById("bat").value;
	var coms = document.getElementById("comsel");
	var comn = document.getElementById("comname").value;
		alert("sending");
	var candidate = {cName:name,
			uId: id,
			contactNo: no,
			batch_code: batc,
			batch_name: batn,
			comm_code: coms.options[coms.selectedIndex].text,
			comm_name: comn,
			votes : []};
				alert("created");
//	$.post("http://127.0.0.1:3000/api/election/apply", candidate);
$.post("http://127.0.0.1:3000/api/election/withdraw/52961ec263f49b533d000003");
		alert("Sent");
});
});



function submitYear(){
	var soa = document.getElementById("soa").value;
	var eoa = document.getElementById("eoa").value;
	var sow = document.getElementById("sow").value;
	var eow = document.getElementById("eow").value;
	var soe = document.getElementById("soe").value;
	var eoe = document.getElementById("eoe").value;
	var rest = document.getElementById("rest").value;
	alert("sending");
	var year = {start_app :soa,
		end_app:eoa,
		start_with :sow,
		end_with:eow,
		start_elec :soe,
		end_elec:eoe,
		res_time :rest,
		candidates : []};
		alert("created");
$.post("http://127.0.0.1:3000/api/election/initialize", year);
		alert("sent");
};
