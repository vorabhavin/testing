const { H5P } = H5PStandalone; // eslint-disable-line no-undef

async function initLib () {
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < window.iCreatorItems.length; i++) {
        const id = window.iCreatorItems[i].id;
        const path = window.iCreatorItems[i].path;
        const el = document.getElementById(id);
        if (el && path) {
            await new H5P(el, path, {
                frameJs: '/assets/icreator/frame.bundle.js',
                frameCss: '/assets/icreator/css/h5p.css'
            });
        }
    }
    /* eslint-enable no-await-in-loop */
    window.wcCheckRunning = false;
}

window.initLib = initLib;

initLib();