interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
    readonly NG_APP_API_URL: string;
    readonly NG_APP_STRATUM_URL: string;
}


/**
 * @deprecated process.env usage
 * prefer using import.meta.env
 * */
declare var process: {
    env: {
        NG_APP_API_URL: string;
        NG_APP_STRATUM_URL: string;
    };
};
