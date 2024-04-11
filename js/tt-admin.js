window.onload = function() {
	wp.domReady(() => {
		
		//This Code will display HTML tag in header.
		let title = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'title' );

		let ttPostTitleSelector = document.querySelectorAll('.wp-block-post-title');

		if( title ){
			// Add a click event listener to each div
			ttPostTitleSelector.forEach(ttPostTitle => {
				ttPostTitle.textContent = title;
			});
		}
	});
};