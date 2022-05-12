export interface WebSocketsConfiguration {
    port: number;
}
declare const wsConfig: () => {
    ws: WebSocketsConfiguration;
};
export default wsConfig;
