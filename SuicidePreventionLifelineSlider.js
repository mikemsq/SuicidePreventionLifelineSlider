/**
 * @license
 * (c) 2014 Michael Vashevko
 * mvashevko{at}gmail{dot}com
 * https://github.com/mikemsq/SuicidePreventionLifelineSlider
 *
 * Donated by HelpPRO.com
 * 
 * Distributed under MIT license.
 * All rights reserved.
 *
 * SuicidePreventionLifelineSlider v1.0
 *
 */

if (typeof jQuery === "undefined") {
	throw "SuicidePreventionLifelineSlider requires jQuery module to be loaded";
}

(function ($) {
	// HelpPRO.SuicidePreventionLifelineSlider
	$.extend(true, window, {
		HelpPRO: {
			SuicidePreventionLifelineSlider: SuicidePreventionLifelineSlider
		}
	});

	function SuicidePreventionLifelineSlider(opt) {
		this.defaultOptions = {
			align: 'left',
			toggleContent: 'Get Help!',
			toggleClass: '',
			panelContent: '<img src="http://www.suicidepreventionlifeline.org/images/GetInvolved/banner2.jpg" alt="suicidepreventionlifeline.org" />',
			panelClass: ''
		};
		var options = $.extend(true, {}, this.defaultOptions);
		options = $.extend(true, options, opt);
	
        $(document).ready(function() {
			var panel = '<div class="panel ' + options.panelClass + '"><a href="http://www.suicidepreventionlifeline.org" target="_blank">' + options.panelContent + '</a></div>';
			var toggle = '<div class="toggle ' + options.toggleClass + '" title="Get Help | Click to Expand">' + options.toggleContent + '</div>';
			var $slider = $('<div class="slider">' + panel + toggle + '</div>');
			$('body').append($slider);
			$slider.css('position', 'fixed');
			$slider.css('top', '0');
			var $panel = $slider.find('> .panel');
			$panel.hide();

			var $toggle = $slider.find('> .toggle');
			$toggle.click(function () {
				$panel.slideToggle();
			});
		});
	}
}(jQuery));
