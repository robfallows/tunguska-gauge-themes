Package.describe({
  name: 'tunguska:gauge-themes',
  version: '1.0.6',
  summary: 'A small theme pack for tunguska:gauge',
  git: 'https://github.com/robfallows/tunguska-gauge-themes.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  if (api.addAssets) {
    api.versionsFrom('1.2');
    api.addAssets([
      'images/steampunkbg.png',
      'images/steampunk01.png',
      'images/steampunk02.png',
      'images/steampunk03.png',
      'images/steampunk04.png',
      'images/steampunk05.png',
      'images/rotarybg.png',
      'images/rotaryfg.png',
      'images/rotaryp.png'
    ], 'client');
  } else {
    api.versionsFrom('1.0.3.1');
    api.addFiles([
      'images/steampunkbg.png',
      'images/steampunk01.png',
      'images/steampunk02.png',
      'images/steampunk03.png',
      'images/steampunk04.png',
      'images/steampunk05.png',
      'images/rotarybg.png',
      'images/rotaryfg.png',
      'images/rotaryp.png'
    ], 'client');
  }
  api.addFiles('gauge-themes.js', 'client');
  api.use('tunguska:gauge@1.0.0', 'client');
  api.export('TunguskaGaugeThemePack', 'client');
  api.export('TunguskaGauge', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tunguska:gauge-themes');
  api.addFiles('gauge-themes-tests.js');
});
