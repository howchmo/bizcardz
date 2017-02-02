var tesseract = require('node-tesseract');
var knwl = new (require('knwl.js'))('english');
knwl.register('phones', require('./node_modules/knwl.js/default_plugins/phones'));
knwl.register('emails', require('./node_modules/knwl.js/default_plugins/emails'));
knwl.register('links', require('./node_modules/knwl.js/default_plugins/links'));
// names
// company names
// addresses

var options = {
	binary: 'c:\Program Files\Tesseract-OCR\tesseract.exe'
}

var sample = "CardSample.tif";

// Recognize text of any language in any format
tesseract.process(__dirname + '\\samples\\'+sample, function(err, text) {
	if(err)
	{
		console.error(err);
	}
	else
	{
		knwl.init(text);
		console.log("phone: "+knwl.get('phones')[0].phone);
		console.log("email: "+knwl.get('emails')[0].address);
		console.log("website: "+knwl.get('links')[0].link);
	}
});
