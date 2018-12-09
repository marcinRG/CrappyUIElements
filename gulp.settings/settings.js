var devFolder = './src/';
var demoFolder = './demo/';
var buildFolder = './build/';
var outputFolder = './CrappyUIElements';
var tsFolder = demoFolder + 'ts/';
var sassFolder = devFolder + 'scss/';
var cssFolder = demoFolder + 'css/';


var paths = {
    client: demoFolder,
    index: demoFolder + 'index.html',
    allTSandTest: [tsFolder + '**/*.ts', demoFolder + '**/*.ts'],
    allTSs: [devFolder + '**/*.ts'],
    scssStyles: [sassFolder + '**/*.scss'],
    tsFile: tsFolder + 'test.ts',
    compiledJS: demoFolder + 'bundle.js',
    scssFile: sassFolder + 'crappyUIElements.scss',
    cssStyles: cssFolder,
    cssFile: cssFolder + 'crappyUIElements.css',
};

var build = {
    path: buildFolder,
    scssPath: buildFolder + 'scss',
    cssFile: buildFolder + 'css/',
    filesToCopy: [buildFolder + '**/*.scss', buildFolder + '**/*.ts'],
    filesToMinify: [buildFolder + '**/*.css', buildFolder + '**/*.js']
};

var output = {
    path: outputFolder
};

module.exports = {
    app: paths,
    build: build,
    output: output
};

