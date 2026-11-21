export type WateringMode = 'auto' | 'manual';

export interface WateringDevice {
    id: string;
    deviceName: string;
    potName: string;
    soilMoisture: number;
    targetMoisure: number;
    mode: WateringDevice;
    isPumpOn: boolean;
    waterUsedToday: number;
    lastWatered: string | null; 
}