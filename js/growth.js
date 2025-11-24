document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('[data-grid="growth"]');
  const reports = Array.isArray(window.REPORTS_CONFIG)
    ? window.REPORTS_CONFIG.filter(item => item.category === 'growth')
    : [];

  if (!grid || reports.length === 0) {
    return;
  }

  grid.innerHTML = '';

  const symbolIcons = ['finance_mode', 'money_bag'];

  reports.forEach(report => {
    const button = document.createElement('div');
    button.className = 'icon-button';

    const icon = document.createElement('span');
    // Usa Material Symbols para íconos modernos como finance_mode
    icon.className = symbolIcons.includes(report.icon)
      ? 'material-symbols-outlined'
      : 'material-icons';
    icon.textContent = report.icon || 'description';

    const label = document.createElement('span');
    label.textContent = report.name;

    button.appendChild(icon);
    button.appendChild(label);

    if (report.external && report.href) {
      button.addEventListener('click', () => window.open(report.href, '_blank'));
    } else if (report.id) {
      button.addEventListener('click', () => {
        window.location.href = `Reports/report_growth.html?id=${report.id}`;
      });
    }

    grid.appendChild(button);
  });
});
