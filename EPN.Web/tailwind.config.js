/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./Views/**/*.cshtml',
		'./Pages/**/*.cshtml'
	],
	theme: {
		extend: {

			fontFamily: {
				'inter': ['Inter']
			},

			fontWeight: {
				light: '300',
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700'
			},

			colors: {
				themeColor: '#FF497C',
				blackLightColor: '#212529',
				greyDarkColor: '#5C5C5C',
				greyMediumColor: '#9A9A9A',    //placeholderColor color
				greyLightColor: '#EEEDED',
				whiteDarkColor: '#F5F5F5',
				whiteLigthDarkColor: '#F8F9FA',
				bgDarkGrayColor: '#474747',
				darkBgColor: '#212529',
				borderGrayColor: '#5C5C5C',
				textWhiteColor: '#FFFFFF',
			},
			boxShadow: {
				'left-bottom': '-5px 5px 10px rgba(0, 0, 0, 0.25)',
			}
		},
	},
	plugins: [],
}

