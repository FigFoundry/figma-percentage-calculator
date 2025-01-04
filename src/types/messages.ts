export interface PluginMessage {
  type: 'calculate-percentage';
  calculationType: string;
  value1: number | null;
  value2: number | null;
  result: number | null;
}