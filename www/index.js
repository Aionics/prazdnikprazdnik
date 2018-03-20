var m_site = {
	test: ko.observable('123'),
	currentPage: ko.observable()
}
var urls = [
	'main',
	'show',
	'animators',
	'price',
	'contacts',
]
document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
    var pager = new Pager($, ko);
    pager.extendWithPage(m_site);
    window.pager = pager;

    pager.useHTML5history = true;
    pager.Href5.history = History;
    pager.extendWithPage(m_site);

    ko.applyBindings(m_site);
    pager.startHistoryJs();

    	var url = location.pathname.substr(1)
	    console.log(url)
	    if (urls.includes(url)) {
	    	console.log(1)
	        pager.navigate(url);
	    } else {
	    	console.log(2)
	        pager.navigate("main");
	    }
    setTimeout(100, function() {
    })
});