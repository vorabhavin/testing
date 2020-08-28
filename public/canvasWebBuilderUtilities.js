function getCanvasAssetPath(filename) {
    if (window.canvas && window.canvas.assetsProxyBasePath) {
        // Remove leading and trailing slashes.
        filename = filename.replace(/^\/+/, '');
        basePath = window.canvas.assetsProxyBasePath.replace(/^\/|\/$/, '');
        return basePath + "/" + filename;
    } else {
        return filename;
    }
}
