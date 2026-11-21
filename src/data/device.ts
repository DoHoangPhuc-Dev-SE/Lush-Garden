import type { WateringDevice} from '../types/device'

export const initialDevices : WateringDevice[] = [
    {
    id: 'dev-01',
    deviceName: 'Thiết bị tưới 01',
    potName: 'Chậu cây 01',
    soilMoisture: 45,
    targetMoisture: 60,
    mode: 'auto',
    isPumpOn: false,
    waterUsedToday: 250,
    lastWatered: 'Hôm nay, 08:08',
  },
  {
    id: 'dev-02',
    deviceName: 'Thiết bị tưới 02',
    potName: 'Chậu cây 02',
    soilMoisture: 70,
    targetMoisture: 45,
    mode: 'manual',
    isPumpOn: false,
    waterUsedToday: 0,
    lastWatered: null,
  },
];