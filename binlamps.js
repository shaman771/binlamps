/**
 * BinLamps v0.1
 */

var dec = $('#value-dec');
var bin = $('#value-bin');
var hex = $('#value-hex');

var a = 0;

$('#lamps li').on("click", function(e) {
	var el = $(this);
	var st = el.children('.lamp-status');
	var val = el.children('.lamp-value');

	el.toggleClass('on');

	if (st.text() == 0) {
		st.text('1');
		a = +dec.text() + +val.text();
	} else {
		st.text('0');
		a = +dec.text() - +val.text();
	}

	dec.text(a);
	bin.text(parseInt(a, 10).toString(2).padStart(8, "0"));
	hex.text(parseInt(a, 10).toString(16).padStart(2, "0").toUpperCase());

});