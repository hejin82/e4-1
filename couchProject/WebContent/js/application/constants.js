/**
 * g_ = global variable.
 * ALL_CAPS = constant variable.
 */

/**
 * Key to local storage list of incidents.
 * @const
 */
var INCIDENTS_LIST_KEY = "INC_LIST_KEY";

/**
 * In-memory representation of an array of all incidents.
 * @global
 */
//g_incidents = null;

/** 
 * Current incident open for editing in the application.
 * @global
 */
g_curIncident = null;

/** 
 * Current subject open for editing in the application.
 * @global
 */
g_curSubject = null;

/**
 * Obtain an incident object from the local storage object
 * by searching on the incident ID (incId).
 * @param incId
 */
function findIncidentByIncId(incId) {	
	var incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	
	var len=0;
	if(incidents)len=incidents.length;
	
	for(var i=0; i<len; i++) {	
		if(incId == incidents[i].incId) {
			return incidents[i];
		}
	}
	return null; //no incident found
}

/**
 * Utility method to set the current incident based
 * upon an incident ID (incId). 
 * @param incId
 */
function setCurrentIncidentByIncId(incId) {
	g_curIncident = findIncidentByIncId(incId);
}

/**
 * Utility method to get the current incident.
 * @returns current incident.
 */
function getCurrentIncident() {
	return g_curIncident;
}

/**
 * Utility method to set the current incident. 
 * @param incident
 */
function setCurrentIncident(incident) {
	g_curIncident = incident;
}

/**
 * Save the current incident to local storage.
 */
function saveCurIncident() {

	if(!g_curIncident) return; //TODO: Thrown an exception here?
	
	var incidents = $.jStorage.get(INCIDENTS_LIST_KEY);	
	var len=0;
	if(incidents) {
		len=incidents.length;
	} else {
		incidents = new Array();
	}
	
	var incId = g_curIncident.incId;
	
	if(len != 0) {
		//find and replace incident.
		for(var i=0; i<len; i++) {	
			if(incId == incidents[i].incId) {
				incidents[i] = g_curIncident;
				$.jStorage.set(INCIDENTS_LIST_KEY, incidents);
				return;
			}
		}
	}
		
	//add new incident.
	incidents.push(g_curIncident);
	$.jStorage.set(INCIDENTS_LIST_KEY, incidents);
	return;
	
}

/**
 * Save the current subject to local storage.
 */
function saveCurSubject() {

	if(!g_curIncident) return; //TODO: Throw an exception here?
	
	if(!g_curSubject) return; //TODO: Throw an exception here?
	
	var subjects = g_curIncident.subjects;
	var len = 0;
	
	if(subjects) {
		len = subjects.length;
	} else {
		subjects = new Array();
	}
	
	var civId = g_curSubject.civId;
	
	for(var i=0; i<len; i++) {
		if(civId == subjects[i].civId) {
			subjects[i] = g_curSubject;
			saveCurIncident();
			return;
		}
	}
	
	//add new subject
	subjects.push(g_curSubject);
	saveCurIncident();
	return;
	
}

/**
 * Select the correct icon to display based
 * on the current online/offline status.
 */
function setOnlineStatus() {

	if(navigator.onLine) {
		$("#statusIndicator").attr("src","../icons/online.png");
	} else {
		$("#statusIndicator").attr("src","../icons/offline.png");
	}
	
	if(navigator.onLine) {
		$("#statusIndicatora").attr("src","../icons/online.png");
	} else {
		$("#statusIndicatora").attr("src","../icons/offline.png");
	}
	
	window.addEventListener("online", function() {
		$("#statusIndicator").attr("src","../icons/online.png");
	}, true);
		 
	window.addEventListener("offline", function() {
		$("#statusIndicator").attr("src","../icons/offline.png");
	}, true);
}