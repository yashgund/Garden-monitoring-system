import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import soilMoistureField from '@iconify/icons-carbon/soil-moisture-field';
import soilTemperatureField from '@iconify/icons-carbon/soil-temperature-field';
import sunIcon from '@iconify/icons-carbon/sun';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Moisture',
    path: '/dashboard/moisture',
    icon: getIcon(soilMoistureField)
  },
  {
    title: 'Temperature',
    path: '/dashboard/temperature',
    icon: getIcon(soilTemperatureField)
  },
  {
    title: 'Sunlight Exposure',
    path: '/dashboard/sunlight',
    icon: getIcon(sunIcon)
  }
];

export default sidebarConfig;
