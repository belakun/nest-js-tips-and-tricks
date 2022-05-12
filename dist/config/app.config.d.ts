export interface ApplicationConfiguration {
    port: number;
    host: string;
    url: string;
}
declare const appConfig: () => {
    app: ApplicationConfiguration;
};
export default appConfig;
