function hide_all() {
	$('.accueil').hide();
	$('.projets').hide();
	$('.skills').hide();
	$('.contact').hide();
	$('.contact2').hide();
	
	$('.navbar-collapse').collapse('hide');
	$('#a_accueil').removeClass("active");
	$('#a_projets').removeClass("active");
	$('#a_skills').removeClass("active");
	$('#a_contact').removeClass("active");
}

function reset_contact_style() {
	$('#prenom').css('background', 'white');
	$('#email').css('background', 'white');
	
	$('#prenom').val("");
	$('#email').val("");
	$('textarea').val("");
	$('#p_text').text("");
}

$('document').ready(function() {
	hide_all();
	$('.accueil').show();
	$('#a_accueil').addClass("active");
	
	$('#a_accueil').click(function() {
		hide_all();
		$('.accueil').show();
		$('#a_show').text('Accueil');
		$('#a_accueil').addClass("active");
	})
	
	$('#a_projets').click(function() {
		hide_all();
		$('.projets').show();
		$('#a_show').text('Projets');
		$('#a_projets').addClass("active");
	})
	
	$('#a_skills').click(function() {
		hide_all();
		$('.skills').show();
		$('#a_show').text('Skills');
		$('#a_skills').addClass("active");
	})
	
	$('#a_contact').click(function() {
		hide_all();
		reset_contact_style();
		$('.contact').show();
		$('#a_show').text('Contact');
		$('#a_contact').addClass("active");
	})
	
	$('#envoyer').click(function() {
		if($('#prenom').val() == "") {
			$('#prenom').css('background', 'red');
		}
		
		if($('#email').val() == "") {
			$('#email').css('background', 'red');
		}
		
		var trim_content = $('textarea').val().trim();
		var num_chars = $('textarea').val().length;
		
		if($('#prenom').val() != "" && $('#email').val() != "" && num_chars > 0 && num_chars < 200 && trim_content != "") {
			$('.contact').hide();
			$('.contact2').show();
		}
	})
	
	$('textarea').keyup(function() {
		var content = $('textarea').val();
		
		if(content.trim() == "")
		{
			$('#p_text').text("");
		} else {
			var num_words = content.split(' ').length;
			var num_chars = content.length;

			$('#p_text').text(num_words + ' mot(s) | ' + num_chars + ' caractere(s) / 200');
	
			if(num_chars > 200) {
				$('#p_text').css('color', 'red');
				$('#envoyer').prop('disabled', true);
			} else {
				$('#p_text').css('color', 'white');
				$('#envoyer').prop('disabled', false);
			}
		}
	})
})
