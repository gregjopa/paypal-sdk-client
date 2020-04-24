/* @flow */

export const HOST = {
    LOCALHOST:     'localhost.paypal.com',
    PAYPAL:        '.paypal.com',
    PAYPALOBJECTS: 'www.paypalobjects.com'
};

export const PROTOCOL = {
    HTTP:  'http:',
    HTTPS: 'https:'
};

// eslint-disable-next-line security/detect-unsafe-regex
export const LEGACY_SDK_PATH = /^(\/[a-zA-Z0-9_-]+)*\/checkout(\.4\.0\.\d{1,3})?(\.min)?\.js$/;

export const DEFAULT_SDK_META = {
    url:          '',
    attrs:        {
        'data-stage-host':      '',
        'data-api-stage-host':  ''
    }
};

export const DEFAULT_LEGACY_SDK_BASE_URL = 'https://www.paypalobjects.com/api/';

export const DATA_ATTRIBUTES = {
    PAYPAL_CHECKOUT: 'data-paypal-checkout',
    NO_BRIDGE:       'data-no-bridge'
};
