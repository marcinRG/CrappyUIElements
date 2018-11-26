var devFolder = './src/';
var demoFolder = './demo/';
var tsFolder = demoFolder + 'ts/';
var sassFolder = devFolder + 'scss/';
var cssFolder = demoFolder + 'css/';

var paths = {
    client: demoFolder,
    index: demoFolder + 'index.html',
    allTSandTest: [tsFolder + '**/*.ts', demoFolder + '**/*.ts'],
    allTSs: [tsFolder + '**/*.ts'],
    scssStyles: [sassFolder + '**/*.scss', '!' + sassFolder + 'libs/' + '**/*.scss'],
    tsFile: tsFolder + 'test.ts',
    compiledJS: demoFolder + 'bundle.js',
    scssFile: sassFolder + 'style.scss',
    cssStyles: cssFolder,
    cssFile: cssFolder + 'style.css',
};

module.exports = {
    app: paths,
};

