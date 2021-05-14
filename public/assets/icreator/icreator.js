const { H5P } = H5PStandalone;

function setup (el, data) {
    new H5P(el, data, {
        frameJs: '/assets/icreator/frame.bundle.js',
        frameCss: '/assets/icreator/css/h5p.css'
    });
}
