window.onload = function() {
	wp.domReady(() => {
		
		//This Code will display HTML tag in header.
		let title = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'title' );

		let timePostTitleSelector = document.querySelectorAll('.wp-block-post-title');

		if( title ){
			// Add a click event listener to each div
			timePostTitleSelector.forEach(timePostTitle => {
				timePostTitle.textContent = title;
			});
		}
	});
};