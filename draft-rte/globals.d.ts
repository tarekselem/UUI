declare module '*.scss' {
    var all: { [selector: string]: string };
    export = all;
}

declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}


// inherited definitions, required for module build
declare module "jsurl";
declare module "query-string";
declare module 'draft-js-plugins-editor';
declare module 'draft-convert';
declare module 'draft-js-clear-formatting';
declare module 'draft-js-plugins-utils';
declare module 'draft-js/lib/*';
declare module 'markdown-draft-js';
