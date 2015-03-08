
// JavaScript Utility Library

var utilities = {
	
	// String utilities
	
	trim: function(s) {
		if (!window.trim) {	// Backwards compatibility
			return s.replace(/^\s+|\s+$/gm,'');
		}
		else {
			return window.trim(s);
		}
	},
	
	
	// Array utilities
	
	// Get the mean value from an array
	getArrayMean: function(a) {
		
		var total = 0, len = a.length, denominator = 0, i = 0;
		
		for (; i < len; i++) {
			try {
				total += Number(aList[i]);
				denominator++;
			}
			catch (e) { }	// ignore
		}
		
		return total / (denominator === 0 ? 1 : denominator);
	},
	
	
	// Cookies
	
	// Add a cookie
	addCookie: function(name, value, days, path) {
		days = days || 365;
		//path = path || "/";	// Not used
		document.cookie = name + "=" + value + "; " + this.getExpiry(days);// + "; path=" + path;
	},
	
	// Retrieve a cookie
	getCookie: function(name) {
		name += '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	},
	
	// Remove a cookie
	removeCookie: function(name) {
		document.cookie = name + "=; " + this.getExpiry(-1);
	},
	
	// Get the expiry date string
	getExpiry: function(days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		return "expiry=" + date.toUTCString();
	}
	
};
