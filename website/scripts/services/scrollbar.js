
export function scrollToTop(scrollDuration) {
    const scrollHeight = window.pageYOffset;
    const scrollStep = Math.PI / ( scrollDuration / 15 );
    const cosParameter = scrollHeight / 2;

    let scrollMargin = 0;
    let scrollCount = 0;
    let scrollInterval = setInterval( function() {
        if ( window.pageYOffset != 0 ) {
            scrollCount = scrollCount + 1;  
            scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
            window.scrollTo(0, scrollHeight - scrollMargin);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}