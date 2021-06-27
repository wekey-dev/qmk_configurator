export default [
  { label: 'Wireless', group: true },
  { label: 'Keyboard output control', width: 'label' },
  {
    name: 'USB',
    code: 'WE_USB',
    title: 'Set output to USB',
    width: 1250
  },
  {
    name: 'BLE 1',
    code: 'WE_BT1',
    title: `Set output to BLE device 1, long press for 3 seconds can pair the device`,
    width: 1250
  },
  {
    name: 'BLE 2',
    code: 'WE_BT2',
    title: `Set output to BLE device 2, long press for 3 seconds can pair the device`,
    width: 1250
  },
  {
    name: 'BLE 3',
    code: 'WE_BT3',
    title: `Set output to BLE device 3, long press for 3 seconds can pair the device`,
    width: 1250
  },
  {
    name: 'RF',
    code: 'WE_URF',
    title: 'Set output to RF with USB Receiver',
    width: 1250
  },
  { width: 0 },
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
  { label: 'Keyboard manager', width: 'label' },
  {
    name: 'PRINT SLEEP',
    code: 'WE_SDS',
    title: 'Send sleep delay value to current connect device',
    width: 2000
  },
  {
    name: 'SLEEP DEFAULT',
    code: 'WE_SDF',
    title: 'Sleep delay set default, 30 min',
    width: 2000
  },
  {
    name: 'SLEEP UP',
    code: 'WE_SDU',
    title: 'Sleep delay + 10 min',
    width: 1500
  },
  {
    name: 'SLEEP DOWN',
    code: 'WE_SDD',
    title: 'Sleep delay - 10 min',
    width: 1500
  },
  {
    name: 'SETUP WAKEUP KEY',
    code: 'WE_WKY',
    title: `After pressing "SETUP WAKEUP KEY", select the key to be set as wake-up-key by pressing`,
    width: 3000
  },
  {
    name: 'SETUP WAKEUP ANYKEY',
    code: 'WE_WAN',
    title: `The keyboard is woken up by pressing any key`,
    width: 3000
  },
  { width: 0 },
  {
    name: 'PRINT BAT',
    code: 'WE_BAT',
    title: 'Send battery percentage to current connect device',
    width: 2000
  },
  {
    name: 'INDICATOR ON/OFF',
    code: 'WE_LMN',
    title: 'On/Off led indicator',
    width: 2000
  },
  { width: 0 },
  {
    name: 'PRINT SPEED',
    code: 'WE_SDS',
    title: 'Send BLE Interval value to current connect device',
    width: 2000
  },
  {
    name: 'SPEED MAX',
    code: 'WE_LMX',
    title: 'Set BLE Intevel => MAX, press "RST" button to apply',
    width: 1500
  },
  {
    name: 'SPEED HIGH',
    code: 'WE_LHI',
    title: 'Set BLE Intevel => HIGH, press "RST" button to apply',
    width: 1500
  },
  {
    name: 'SPEED NORMAL',
    code: 'WE_LNO',
    title: 'Set BLE Intevel => NORMAL, press "RST" button to apply',
    width: 1500
  },
  { width: 0 },
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
  }
];
