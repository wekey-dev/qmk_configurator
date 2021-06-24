export default [
  { label: 'KeyboardSettings', group: true },

  { label: 'Keyboard settings (persistent)', width: 'label' },

  {
    name: 'Swap LCtl/Caps',
    code: 'CL_SWAP',
    title: 'Swap Left Control and Caps Lock',
    width: 2000
  },
  {
    name: 'Caps>LCtl',
    code: 'CL_CTRL',
    title: 'Treat Caps Lock as Left Control',
    width: 2000
  },
  {
    name: 'Swap LCtl/LGUI',
    code: 'LCG_SWP',
    title: 'Swap Left Control and GUI',
    width: 2000
  },
  {
    name: 'Swap RCtl/RGUI',
    code: 'RCG_SWP',
    title: 'Swap Right Control and GUI',
    width: 2000
  },
  {
    name: 'Swap LAlt/LGUI',
    code: 'LAG_SWP',
    title: 'Swap Left Alt and Left GUI',
    width: 2000
  },
  {
    name: 'Swap RAlt/RGUI',
    code: 'RAG_SWP',
    title: 'Swap Right Alt and Right GUI',
    width: 2000
  },
  {
    name: 'Disable GUI',
    code: 'GUI_OFF',
    title: 'Disable the GUI keys (useful when gaming)',
    width: 2000
  },
  {
    name: 'Swap ` with Esc',
    code: 'GE_SWAP',
    title: 'Swap ` and Escape',
    width: 2000
  },
  {
    name: 'Swap \\ with Bksp',
    code: 'BS_SWAP',
    title: 'Swap Backslash and Backspace',
    width: 2000
  },
  {
    name: 'NKRO On',
    code: 'NK_ON',
    title: 'Force N-Key Rollover (NKRO) on',
    width: 2000
  },
  {
    name: 'Swap Alt/GUI',
    code: 'AG_SWAP',
    title: 'Swap Alt and GUI on both sides (for macOS)',
    width: 2000
  },
  {
    name: 'Swap Ctl/GUI',
    code: 'CG_SWAP',
    title: 'Swap Ctrl and GUI on both sides (for macOS)',
    width: 2000
  },
  {
    width: 0
  },
  {
    name: 'Rev LCtl/Caps',
    code: 'CL_NORM',
    title: 'Unswap Left Control and Caps Lock',
    width: 2000
  },
  {
    name: 'Rev Caps>LCtl',
    code: 'CL_CAPS',
    title: 'Stop treating Caps Lock as Left Control',
    width: 2000
  },
  {
    name: 'Unswap LCtl/LGUI',
    code: 'LCG_NRM',
    title: 'Unswap Left Control and GUI',
    width: 2000
  },
  {
    name: 'Unswap RCtl/RGUI',
    code: 'RCG_NRM',
    title: 'Unswap Right Control and GUI',
    width: 2000
  },
  {
    name: 'Rev LAlt/LGUI',
    code: 'LAG_NRM',
    title: 'Unswap Left Alt and Left GUI',
    width: 2000
  },
  {
    name: 'Rev RAlt/RGUI',
    code: 'RAG_NRM',
    title: 'Unswap Right Alt and Right GUI',
    width: 2000
  },
  {
    name: 'Enable GUI',
    code: 'GUI_ON',
    title: 'Enable the GUI keys',
    width: 2000
  },
  {
    name: 'Rev ` with Esc',
    code: 'GE_NORM',
    title: 'Unswap ` and Escape',
    width: 2000
  },
  {
    name: 'Rev \\ with Bksp',
    code: 'BS_NORM',
    title: 'Unswap Backslash and Backspace',
    width: 2000
  },
  {
    name: 'NKRO Off',
    code: 'NK_OFF',
    title: 'Force N-Key Rollover (NKRO) off',
    width: 2000
  },
  {
    name: 'Rev Alt/GUI',
    code: 'AG_NORM',
    title: 'Unswap Alt and GUI on both sides (for macOS)',
    width: 2000
  },
  {
    name: 'Unswap Ctl/GUI',
    code: 'CG_NORM',
    title: 'Unswap Ctrl and GUI on both sides',
    width: 2000
  },
  {
    name: 'Toggle NKRO',
    code: 'NK_TOGG',
    title: 'Turn NKRO on or off',
    width: 2000
  },

  {
    label: 'Backlight settings',
    width: 'label'
  },

  {
    name: 'BL Toggle',
    code: 'BL_TOGG',
    title: 'Turn the backlight on or off',
    width: 1750
  },
  {
    name: 'BL Cycle',
    code: 'BL_STEP',
    title: 'Cycle through backlight levels',
    width: 1750
  },
  {
    name: 'BL Breath',
    code: 'BL_BRTG',
    title: 'Toggle backlight breathing',
    width: 1750
  },
  {
    name: 'BL On',
    code: 'BL_ON',
    title: 'Set the backlight to max brightness',
    width: 1750
  },
  {
    name: 'BL +',
    code: 'BL_INC',
    title: 'Increase the backlight level',
    width: 1750
  },
  { width: 0 },
  { width: 1750 },
  { width: 1750 },
  { width: 1750 },
  {
    name: 'BL Off',
    code: 'BL_OFF',
    title: 'Turn the backlight off',
    width: 1750
  },
  {
    name: 'BL -',
    code: 'BL_DEC',
    title: 'Decrease the backlight level',
    width: 1750
  },

  { label: 'RGB Lighting settings', width: 'label' },

  {
    name: 'RGB Toggle',
    code: 'RGB_TOG',
    title: 'Toggle RGB lighting on or off',
    width: 1750
  },
  { name: 'RGB Mode +', code: 'RGB_MOD', title: 'Next RGB mode', width: 1750 },
  { name: 'Hue +', code: 'RGB_HUI', title: 'Increase hue', width: 1750 },
  { name: 'Sat +', code: 'RGB_SAI', title: 'Increase saturation', width: 1750 },
  { name: 'Bright +', code: 'RGB_VAI', title: 'Increase value', width: 1750 },
  { name: 'Effect +', code: 'RGB_SPI', title: 'Increase RGB effect speed', width: 1750 },
  { width: 0 },
  { width: 1750 },
  { name: 'RGB Mode -', code: 'RGB_RMOD', title: 'Previous RGB mode', width: 1750 },
  { name: 'Hue -', code: 'RGB_HUD', title: 'Decrease hue', width: 1750 },
  { name: 'Sat -', code: 'RGB_SAD', title: 'Decrease saturation', width: 1750 },
  { name: 'Bright -', code: 'RGB_VAD', title: 'Decrease value', width: 1750 },
  { name: 'Effect -', code: 'RGB_SPD', title: 'Decrease RGB effect speed', width: 1750 },
  { width: 0 },
  { name: 'RGB Mode P', code: 'RGB_M_P', title: 'RGB Mode: Plain', width: 1750 },
  { name: 'RGB Mode B', code: 'RGB_M_B', title: 'RGB Mode: Breathe', width: 1750 },
  { name: 'RGB Mode R', code: 'RGB_M_R', title: 'RGB Mode: Rainbow', width: 1750 },
  { name: 'RGB Mode SW', code: 'RGB_M_SW', title: 'RGB Mode: Swirl', width: 1750 },
  { name: 'RGB Mode SN', code: 'RGB_M_SN', title: 'RGB Mode: Snake', width: 1750 },
  { name: 'RGB Mode K', code: 'RGB_M_K', title: 'RGB Mode: Knight Rider', width: 1750 },
  { name: 'RGB Mode X', code: 'RGB_M_X', title: 'RGB Mode: Christmas', width: 1750 },
  { name: 'RGB Mode G', code: 'RGB_M_G', title: 'RGB Mode: Gradient', width: 1750 },
  { name: 'RGB Mode T', code: 'RGB_M_T', title: 'RGB Mode: Test', width: 1750 },
];
