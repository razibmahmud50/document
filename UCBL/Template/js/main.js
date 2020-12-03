(function ($) {
	"use strict";
	
	// datatable initialize
	$(document).ready(function() {
		$('#example').DataTable();
		$('#fundTransfer').DataTable();
		$('#billPay').DataTable();
		$('#amendTable').DataTable();
		$('#docStatus').DataTable();
	} );
	
	  // on click menu dropdown area not hide
		$('.dropdown-menu  .dropdown-toggle').on("click", function(e){
		  $(this).next('ul').toggle();
		  e.stopPropagation();
		  e.preventDefault();
		});

}(jQuery));