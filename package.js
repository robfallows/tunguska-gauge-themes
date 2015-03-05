Package.describe({
  name: 'tunguska:gauge-themes',
  version: '1.0.1',
  summary: 'A small theme pack for tunguska:gauge',
  git: 'https://github.com/robfallows/tunguska-gauge-themes',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('tunguska:gauge-themes.js', 'client');
  api.export('TunguskaGaugeThemePack', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tunguska:gauge-themes');
  api.addFiles('tunguska:gauge-themes-tests.js');
});
