/**
 * Functions specific to incidents.html.
 */
//$( document ).delegate("#incidentListPage", "pageinit", function() {
$("#incidentListPage").live("pageinit", function() {
	alert("1");
	var incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	
	var len=incidents.length;
	
	$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
	for(var i=0; i<len; i++) {
		var val = incidents[i].eventNumber;
		$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val + '</a></li>');
		//alert(i =") "+value);
	}
	$("#incidentListDiv").trigger('create');
	//$("#incidentListDiv").trigger('create');
	alert("2");
	/*
	$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
			$.each(incidents.incident, function(key, val) {
				$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val.key + '</a></li>');		
		});		
	$("#incidentListDiv").trigger('create');
	*/
	/* Get live data from server:
	$.getJSON('../jsp/test.jsp', function(data) {				
		$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
		$.each(data.rows, function(key, val) {
			$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val.key + '</a></li>');		
		});		
		$("#incidentListDiv").trigger('create');
	});				  		
	  		*/
});	  		