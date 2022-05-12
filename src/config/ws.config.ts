export interface WebSocketsConfiguration {
  port: number;
}

const wsConfig = (): { ws: WebSocketsConfiguration } => ({
  ws: {
    port: parseInt(process.env.WS_PORT, 10),
  },
});

export default wsConfig;
