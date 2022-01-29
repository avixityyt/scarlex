export  interface ScarlexClientOptions {
    /** Server port it's going to listen
     * @default 3000
     * @type {number}
    */
    serverPort: number;

    /** Browsers title
     * @default "Scarlex Docs"
     * @type {string}
     */
    webTitle: string;
    
    /** Your base url for docs ex: https://scrx.xyz/
     * @example https://scrx.xyz/
     * @type {string}
     */
    baseURL: string;
}

export default ScarlexClientOptions;