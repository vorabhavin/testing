(function () {
    /**
     * What is this file intended for?
     * This file is intended as a data abstraction layer for the POC work currently hidden behind the feature flag
     * "webbuilder-analytics-datalayer-poc" for CANDEV-303. The scope of this file is detect any available events
     * within the web components and demo this functionality so we can identify any gaps.
     *
     * References //
     * The GRV team has a similiar layer which we emulated for the sole component (HelixButtonClick) that is storing in adobe:
     * https://github.com/pfizer/grv-web-components/blob/master/src/assets/analytics/analytics.js
     *
    */

    // temp for debouncing
    const debounce = (func, delay) => {
        let debounceTimer;
        return function (...arg) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => { return func.apply(context, arg); }, delay);
        };
    };

    window.addEventListener('helixEvent', (event) => {
        const detail = event.detail;
        const name = Object.prototype.hasOwnProperty.call(detail, 'name') ? detail.name : undefined;
        const meta = (Object.prototype.hasOwnProperty.call(detail, 'meta') && detail.meta && detail.meta.length) ? detail.meta[0] : undefined;
        let analyticsType = '';

        if (!name) return;

        // <helix-button>
        if (name == 'HelixButtonClick') {
            if (!meta.name && !meta.value) return;
            analyticsType = analyticsType || name;
            s.pfLinkName(`Helix Button | ${analyticsType} | ${meta.name} | ${meta.value}`, 'internal');
        }
        // <helix-input>
        if (name == 'HelixInputFocus') {
            if (!meta.name && !meta.value) return;
            console.log('focus fired for helix-input', meta);
        }
        // <helix-checkbox>
        if (name == 'HelixCheckboxSelect' || name == 'HelixCheckboxUnselect') {
            if (!meta.name && !meta.value) return;
            console.log(`${meta.name} checkbox has been ${meta.value == 'on' ? 'checked' : 'unchecked'}`);
        }
        // <helix-select>
        if (name == 'HelixSelectChange') {
            if (!meta.value) return;
            console.log(`${event.target.localName} with ID of ${event.target.id} has selected value of ${meta.value}`);
        }
    }, false);


    // <helix-card>
    window.addEventListener('didCalculateReadingTime', (event) => {
        console.log(`event:didCalculateReadingTime for component:helix-card ==>> `, event);
    }, false);

    // multiple helix form elements
    window.addEventListener('helixLoaded', (event) => {
        console.log(`event:helixLoaded for component:${event.target.localName} ==>> `, event);
    }, false);

    // multiple helix form elements
    window.addEventListener('onChange', debounce((event) => {
        console.log(`event:onChange for component:helix-text-wall ==>> `, event);
    }, 500), false);

    // <helix-checkbox>
    // <helix-textarea>
    window.addEventListener('validStateChange', (event) => {
        console.log('TCL: event.target.localName', event.target.localName);
        if (event.target.localName !== 'helix-checkbox') return;
        console.log(`event:validStateChange for component:helix-checkbox - state has changed to ${event.detail ? 'valid' : 'non-valid'}`);
    }, false);

    // <helix-loader>
    window.addEventListener('helixLoaderDidHide', (event) => {
        if (event.target.localName !== 'helix-loader') return;
        console.log(`event:helixLoaderDidHide fired loader of ID ${event.target.id}`);
    }, false);

    // <helix-loader>
    window.addEventListener('helixLoaderDidShow', (event) => {
        if (event.target.localName !== 'helix-loader') return;
        console.log(`event:helixLoaderDidShow fired loader of ID ${event.target.id}`);
    }, false);

    // <helix-loader>
    window.addEventListener('helixLoaderWillHide', (event) => {
        if (event.target.localName !== 'helix-loader') return;
        console.log(`event:helixLoaderWillHide fired loader of ID ${event.target.id}`);
    }, false);

    // <helix-loader>
    window.addEventListener('helixLoaderWillShow', (event) => {
        if (event.target.localName !== 'helix-loader') return;
        console.log(`event:helixLoaderWillShow fired loader of ID ${event.target.id}`);
    }, false);

    // <helix-pagination>
    window.addEventListener('onPageChange', (event) => {
        if (event.target.localName !== 'helix-pagination') return;
        console.log(`event:onPageChange component:helix-pagination is now on page ${event.detail}`);
    }, false);

    // <helix-select>
    window.addEventListener('menuOpened', (event) => {
        if (event.target.localName !== 'helix-select') return;
        console.log(`event:menuOpened component:${event.target.localName} menu is ${event.detail.itemsOpen ? 'opened' : 'closed'}`);
    }, false);
}());
