export default [
  { label: 'Wireless', group: true },
  { label: 'Keyboard output control', width: 'label' },
  {
    name: 'USB',
    code: 'WE_USB',
    title: 'Set output to USB',
    width: 1250
  },
  { width: 0 },
  {
    name: 'BLE 1',
    code: 'WE_BT1',
    title: 'Set output to BLE device 1, long press for 3 seconds can pair the device',
    width: 1250
  },
  {
    name: 'BLE 2',
    code: 'WE_BT2',
    title: 'Set output to BLE device 2, long press for 3 seconds can pair the device',
    width: 1250
  },
  {
    name: 'BLE 3',
    code: 'WE_BT3',
    title: 'Set output to BLE device 3, long press for 3 seconds can pair the device',
    width: 1250
  },
  { width: 0 },
  {
    name: 'RF',
    code: 'WE_URF',
    title: 'Set output to RF with USB Receiver',
    width: 1250
  },
  { label: 'Keyboard manager', width: 'label' },
  {
    name: 'AUTO USB',
    code: 'WE_DET',
    title: 'On/Off auto switch output to USB when USB is connected.',
    width: 1250
  },
  {
    name: 'BLE RST',
    code: 'WE_BTF',
    title: 'Delete all paired bluetooth connections',
    width: 1250
  },
  {
    name: 'INFO',
    code: 'WE_IFO',
    title: 'Send keyboard info to device',
    width: 1250
  },
  {
    name: 'SLEEP',
    code: 'WE_SLP',
    title: 'Enter sleep mode',
    width: 1250
  },
  {
    name: 'DFU',
    code: 'WE_DFU',
    title: 'Enter DFU mode',
    width: 1250
  },
  {
    name: 'RST',
    code: 'WE_RST',
    title: 'Restart keyboard',
    width: 1250
  },
];
