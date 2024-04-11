window.onload = function() {
    var ttPostTitle = document.querySelector('.wp-block-post-title');
    if( ttPostTitle ){
        tempTitle = decodedString(ttPostTitle.innerHTML);
        ttPostTitle.innerHTML = tempTitle;
    }

    function decodedString ( encodedString ){
        var tempDecodedString = encodedString.toString().replace( /&lt;\/?([a-zA-Z]+)&gt;/g, function(match, p1) {
            if (p1.toLowerCase() === 'i') {
                return '<i>';
            } else if (p1.toLowerCase() === 'b') {
                return '<b>';
            } else if (p1.toLowerCase() === 'strong') {
                return '<strong>';
            } else if (p1.toLowerCase() === 'em') {
                return '<em>';
            } else {
                return '';
            }
        });
        return tempDecodedString ;
    }
};