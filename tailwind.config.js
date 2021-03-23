module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				mont_extraLight: ['Mont ExtraLight', 'sans-serif'],
				mont_heavy: ['Mont Heavy', 'sans-serif'],

				poppins_black_italic: ['Poppins Black Italic', 'sans-serif'],
				poppins_bold: ['Poppins Bold', 'sans-serif'],
				poppin_bold_italic: ['Poppin Bold Italic', 'sans-serif'],
				poppins_extraBold: ['Poppins ExtraBold', 'sans-serif'],
				poppins_extra_bold_italic: ['Poppins Extra Bold Italic', 'sans-serif'],
				poppins_extra_light: ['Poppins Extra Light', 'sans-serif'],
				poppins_extra_light_italic: ['Poppins Extra Light Italic', 'sans-serif'],
				poppins_italic: ['Poppins Italic', 'sans-serif'],
				poppins_light: ['Poppins Light', 'sans-serif'],
				poppins_light_italic: ['Poppins Light Italic', 'sans-serif'],
				poppins_medium: ['Poppins Medium', 'sans-serif'],
				poppins_medium_italic: ['Poppins Mediu Italic', 'sans-serif'],
				poppins_regular: ['Poppins Regular', 'sans-serif'],
				poppins_semiBold: ['Poppins SemiBold', 'sans-serif'],
				poppins_semi_bold_italic: ['Poppins Semi Bold Italic', 'sans-serif'],
				poppins_thin: ['Poppins Thin', 'sans-serif'],
				poppins_thin_italic: ['Poppins Thin Italic', 'sans-serif'],

			},
			colors: {
				bnpp: {
					green: '#00915A',
					light_green: '#5EC66B',
				},
			},	  
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
