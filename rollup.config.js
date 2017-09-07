import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    dest: 'build/node-editor.js',
    plugins: [ 
	   babel({
	  'presets': [
      [
		  'es2015',
		  {
              'modules': false
		  }
      ]
	  ],
	  plugins: ['external-helpers', 'transform-async-to-generator']
   })
    ],
    format: 'iife',
    moduleName: 'D3NE'
};