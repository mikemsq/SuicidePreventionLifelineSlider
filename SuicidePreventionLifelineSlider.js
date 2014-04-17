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

	function SuicidePreventionLifelineSlider() {
        $(document).ready(function() {
			//init();
			
			var $slider = $('<div class="slide"><div class="slider"><div class="panel" style="height:60px"><a href="http://www.suicidepreventionlifeline.org" target="_blank"><img src="http://www.suicidepreventionlifeline.org/images/GetInvolved/banner2.jpg" alt="suicidepreventionlifeline.org" /></a></div><a href="" class="toggle" title="Get Help | Click to Expand">Get Help!</a></div></div>');
			$('body').append($slider);
			
			var $panel = $slider.find('> .slider > .panel');
			var yOffset = $panel.height() + 1;
			$slider.css('position', 'fixed');
			$slider.css('top', '-' + yOffset + 'px');
			
			var $toggle = $slider.find('> .slider > .toggle');
			$toggle.click(function () {
				if ($('.slide').css('top') == '-' + yOffset + 'px') {
					$('.slide').animate({ top: '0px' }, 500);
				} else {
					$('.slide').animate({ top: '-' + yOffset + 'px' }, 500);
				}
				return false;
			})
		});
	}
}(jQuery));
