export const phoneMask = {
	mask: {
		mask: "+7 (___) ___-__-__",
		replacement: { _: /\d/ },
		// showMask: true,
	},
	unformat: { mask: "+_ (___) ___-__-__", replacement: { _: /\d/ } },
};

