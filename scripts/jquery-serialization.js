(function($) {
	$.fn.extend({
		toObject: function() {
		    var result = {}
			this.serializeArray().map(v=>{
				result[v.name] = v.value;
			})
			return result;
		},
		fromObject: function(obj) {
			this.find(':input').map((o,v)=>{
				var name = $(v).attr('name');
				if (obj[name]) {
				     $(v).val(obj[name]);
				 } else {
					$(v).val('');
				 }
			})
		}
	});
})(jQuery);