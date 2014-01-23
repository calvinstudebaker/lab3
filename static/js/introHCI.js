'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("CHANGE");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);

	//Changing projects with the html form
	$("#submitBtn").click(changeProject);
};

function changeProject(e){
	var project = $("#project").val();
	var newWidth = $("#width").val();
	var newDescription = $("#description").val();

	$(project).animate({
		width: newWidth
	});
	var thisDescription = project + " .project-description";
	$(thisDescription).text(newDescription);
};

function projectClick(e){
	console.log("Project Clicked");

	e.preventDefault();

	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.hide('slow');
    }
};