$(function(){
	
	$('.portfolio_item').hide();
	
	$("#mediasonar").show();
	
	$('#mediasonar_but').click(function(){ ShowContent("mediasonar"); });
	
	$('#G2PO_but').click(function(){ShowContent("g2po"); });
	
	$('#connex_but').click(function(){ShowContent("connex"); });
	
	$('#fordEMS_but').click(function(){ShowContent("fordEMS"); });

	$('#daimler_but').click(function(){ShowContent("daimler"); });

	$('#diply_but').click(function(){ShowContent("diply"); });	


	$("#inventory1").show();
	
	$('#inventory1_btn').click(function(){ShowContent("inventory1"); });
	
	$('#inventory2_btn').click(function(){ShowContent("inventory2"); });
	
	$('#inventory3_btn').click(function(){ShowContent("inventory3"); });
	
	$('#inventory4_btn').click(function(){ShowContent("inventory4"); });

	$('#inventory5_btn').click(function(){ShowContent("inventory5"); });

});

function ShowContent(divID)
{
	$('.portfolio_item').hide();
	$('#' + divID).fadeIn();						
}


