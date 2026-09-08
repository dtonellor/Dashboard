// =====================================================
// InsightCommerce Dashboard - Charts Configuration
// =====================================================

const ChartsManager = {
    charts: {},

    // Get theme-aware colors
    getThemeColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return {
            text: isDark ? '#f1f5f9' : '#111827',
            textSecondary: isDark ? '#cbd5e1' : '#6b7280',
            gridColor: isDark ? '#334155' : '#e5e7eb',
            bgColor: isDark ? '#1e293b' : '#ffffff'
        };
    },

    // Common chart options
    getCommonOptions() {
        const colors = this.getThemeColors();
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: colors.bgColor,
                    titleColor: colors.text,
                    bodyColor: colors.textSecondary,
                    borderColor: colors.gridColor,
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    boxPadding: 4
                }
            }
        };
    },

    // Initialize all charts
    init() {
        this.initSalesChart();
        this.initDailySalesChart();
        this.initChannelChart();
        this.initProductsChart();
        this.initCustomersChart();
        this.initRegionChart();
        this.initCategoriesChart();
        this.renderChannelStats();
    },

    // Update all charts when theme changes
    updateTheme() {
        Object.values(this.charts).forEach(chart => {
            chart.destroy();
        });
        this.charts = {};
        this.init();
    },

    // Update charts data based on period
    updateData(period) {
        // Update daily sales chart
        this.updateDailySalesChart(period);

        // Update sales chart (show different number of months)
        this.updateSalesChart(period);
    },

    // Update daily sales chart based on period
    updateDailySalesChart(period) {
        if (!this.charts.dailySales) return;

        const allData = DashboardData.dailySales;
        let data;

        switch (period) {
            case 7:
                data = allData.slice(0, 7).reverse();
                break;
            case 30:
                data = allData.slice().reverse();
                break;
            case 90:
                // For 90 days, repeat and variation the data
                data = this.generateExtendedDailyData(30);
                break;
            case 365:
                // For 365 days, show monthly aggregated data
                data = this.generateYearlyDailyData();
                break;
            default:
                data = allData.slice(0, 30).reverse();
        }

        const colors = this.getThemeColors();

        this.charts.dailySales.data.labels = data.map(d => d.date);
        this.charts.dailySales.data.datasets[0].data = data.map(d => d.revenue);
        this.charts.dailySales.data.datasets[1].data = data.map(d => d.orders);
        this.charts.dailySales.update();
    },

    // Generate extended daily data for 90 days
    generateExtendedDailyData(days) {
        const data = [];
        const baseData = DashboardData.dailySales;

        for (let i = 0; i < days; i++) {
            const baseItem = baseData[i % baseData.length];
            const variation = 0.8 + Math.random() * 0.4; // 80% to 120%
            data.push({
                date: `${String(days - i).padStart(2, '0')}/08`,
                revenue: Math.round(baseItem.revenue * variation),
                orders: Math.round(baseItem.orders * variation),
                visitors: Math.round(baseItem.visitors * variation)
            });
        }
        return data.reverse();
    },

    // Generate daily data for yearly view (aggregated by week)
    generateYearlyDailyData() {
        const data = [];
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

        for (let m = 0; m < 12; m++) {
            const baseRevenue = 150000 + Math.random() * 100000;
            const baseOrders = 1000 + Math.round(Math.random() * 500);
            data.push({
                date: months[m],
                revenue: Math.round(baseRevenue),
                orders: baseOrders,
                visitors: Math.round(baseOrders * 3.5)
            });
        }
        return data;
    },

    // Update sales chart based on period
    updateSalesChart(period) {
        if (!this.charts.sales) return;

        const allData = DashboardData.monthlySales;
        let data;

        switch (period) {
            case 7:
            case 30:
                data = allData.slice(-12);
                break;
            case 90:
                data = allData.slice(-18);
                break;
            case 365:
                data = allData;
                break;
            default:
                data = allData.slice(-12);
        }

        this.charts.sales.data.labels = data.map(d => d.month);
        this.charts.sales.data.datasets[0].data = data.map(d => d.revenue);
        this.charts.sales.data.datasets[1].data = data.map(d => d.orders);
        this.charts.sales.update();
    },

    // Sales Evolution Chart (Line - 24 months)
    initSalesChart() {
        const ctx = document.getElementById('salesChart');
        if (!ctx) return;

        const colors = this.getThemeColors();
        const data = DashboardData.monthlySales;

        this.charts.sales = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(d => d.month),
                datasets: [
                    {
                        label: 'Receita',
                        data: data.map(d => d.revenue),
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 3,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#3b82f6',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Pedidos',
                        data: data.map(d => d.orders),
                        borderColor: '#8b5cf6',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        tension: 0.4,
                        pointRadius: 3,
                        pointHoverRadius: 6,
                        pointBackgroundColor: '#8b5cf6',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                ...this.getCommonOptions(),
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 10 },
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        position: 'left',
                        grid: {
                            color: colors.gridColor,
                            drawBorder: false
                        },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 11 },
                            callback: function(value) {
                                return 'R$ ' + (value / 1000) + 'k';
                            }
                        }
                    },
                    y1: {
                        position: 'right',
                        grid: { display: false },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 11 }
                        }
                    }
                },
                plugins: {
                    ...this.getCommonOptions().plugins,
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                if (context.datasetIndex === 0) {
                                    return 'Receita: ' + DashboardData.formatCurrency(context.raw);
                                }
                                return 'Pedidos: ' + DashboardData.formatNumber(context.raw);
                            }
                        }
                    }
                }
            }
        });
    },

    // Daily Sales Chart (Bar - Last 30 days)
    initDailySalesChart() {
        const ctx = document.getElementById('dailySalesChart');
        if (!ctx) return;

        const colors = this.getThemeColors();
        const data = DashboardData.dailySales.slice().reverse();

        this.charts.dailySales = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.date),
                datasets: [
                    {
                        label: 'Receita Diária',
                        data: data.map(d => d.revenue),
                        backgroundColor: 'rgba(59, 130, 246, 0.7)',
                        borderColor: '#3b82f6',
                        borderWidth: 1,
                        borderRadius: 4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Pedidos',
                        data: data.map(d => d.orders),
                        type: 'line',
                        borderColor: '#22c55e',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 2,
                        pointHoverRadius: 5,
                        pointBackgroundColor: '#22c55e',
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                ...this.getCommonOptions(),
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 10 },
                            maxRotation: 45,
                            maxTicksLimit: 15
                        }
                    },
                    y: {
                        position: 'left',
                        grid: {
                            color: colors.gridColor,
                            drawBorder: false
                        },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 11 },
                            callback: function(value) {
                                return 'R$ ' + (value / 1000) + 'k';
                            }
                        }
                    },
                    y1: {
                        position: 'right',
                        grid: { display: false },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 11 }
                        }
                    }
                },
                plugins: {
                    ...this.getCommonOptions().plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 16,
                            color: colors.textSecondary,
                            font: { size: 11 }
                        }
                    },
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                if (context.datasetIndex === 0) {
                                    return 'Receita: ' + DashboardData.formatCurrency(context.raw);
                                }
                                return 'Pedidos: ' + context.raw;
                            }
                        }
                    }
                }
            }
        });
    },

    // Sales by Channel Chart (Doughnut)
    initChannelChart() {
        const ctx = document.getElementById('channelChart');
        if (!ctx) return;

        const data = DashboardData.channels;

        this.charts.channel = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.name),
                datasets: [{
                    data: data.map(d => d.value),
                    backgroundColor: data.map(d => d.color),
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                ...this.getCommonOptions(),
                cutout: '65%',
                plugins: {
                    ...this.getCommonOptions().plugins,
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const channel = data[context.dataIndex];
                                return channel.name + ': ' + context.raw + '% (' + DashboardData.formatCurrency(channel.revenue) + ')';
                            }
                        }
                    }
                }
            }
        });
    },

    // Render channel stats below doughnut chart
    renderChannelStats() {
        const container = document.getElementById('channelStats');
        if (!container) return;

        const data = DashboardData.channels;
        container.innerHTML = data.map(channel => `
            <div class="channel-stat-item">
                <span class="channel-name">
                    <span class="channel-dot" style="background-color: ${channel.color}"></span>
                    ${channel.name}
                </span>
                <span class="channel-value">${DashboardData.formatCurrency(channel.revenue)}</span>
            </div>
        `).join('');
    },

    // Top Products Chart (Bar)
    initProductsChart() {
        const ctx = document.getElementById('productsChart');
        if (!ctx) return;

        const colors = this.getThemeColors();
        const data = DashboardData.topProducts.slice(0, 5);

        this.charts.products = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.name),
                datasets: [{
                    label: 'Vendas',
                    data: data.map(d => d.sales),
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(34, 197, 94, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)'
                    ],
                    borderColor: ['#3b82f6', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444'],
                    borderWidth: 1,
                    borderRadius: 6,
                    barThickness: 28
                }]
            },
            options: {
                ...this.getCommonOptions(),
                indexAxis: 'y',
                scales: {
                    x: {
                        grid: {
                            color: colors.gridColor,
                            drawBorder: false
                        },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 11 }
                        }
                    },
                    y: {
                        grid: { display: false },
                        ticks: {
                            color: colors.text,
                            font: { size: 11, weight: 500 }
                        }
                    }
                },
                plugins: {
                    ...this.getCommonOptions().plugins,
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const product = data[context.dataIndex];
                                return [
                                    'Vendas: ' + DashboardData.formatNumber(product.sales),
                                    'Receita: ' + DashboardData.formatCurrency(product.revenue)
                                ];
                            }
                        }
                    }
                }
            }
        });
    },

    // New vs Returning Customers (Bar stacked - 24 months)
    initCustomersChart() {
        const ctx = document.getElementById('customersChart');
        if (!ctx) return;

        const colors = this.getThemeColors();
        const data = DashboardData.customerHistory;

        this.charts.customers = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.month),
                datasets: [
                    {
                        label: 'Novos',
                        data: data.map(d => d.newCustomers),
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: '#3b82f6',
                        borderWidth: 1,
                        borderRadius: 2
                    },
                    {
                        label: 'Recorrentes',
                        data: data.map(d => d.returningCustomers),
                        backgroundColor: 'rgba(34, 197, 94, 0.8)',
                        borderColor: '#22c55e',
                        borderWidth: 1,
                        borderRadius: 2
                    }
                ]
            },
            options: {
                ...this.getCommonOptions(),
                scales: {
                    x: {
                        stacked: true,
                        grid: { display: false },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 9 },
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                            color: colors.gridColor,
                            drawBorder: false
                        },
                        ticks: {
                            color: colors.textSecondary,
                            font: { size: 11 }
                        }
                    }
                },
                plugins: {
                    ...this.getCommonOptions().plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 16,
                            color: colors.textSecondary,
                            font: { size: 11 }
                        }
                    },
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + DashboardData.formatNumber(context.raw);
                            }
                        }
                    }
                }
            }
        });
    },

    // Sales by Region Chart (Polar Area)
    initRegionChart() {
        const ctx = document.getElementById('regionChart');
        if (!ctx) return;

        const data = DashboardData.regions;

        this.charts.region = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: data.map(d => d.name),
                datasets: [{
                    data: data.map(d => d.value),
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.7)',
                        'rgba(139, 92, 246, 0.7)',
                        'rgba(34, 197, 94, 0.7)',
                        'rgba(245, 158, 11, 0.7)',
                        'rgba(239, 68, 68, 0.7)'
                    ],
                    borderColor: ['#3b82f6', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444'],
                    borderWidth: 1
                }]
            },
            options: {
                ...this.getCommonOptions(),
                scales: {
                    r: {
                        grid: { color: this.getThemeColors().gridColor },
                        ticks: { display: false }
                    }
                },
                plugins: {
                    ...this.getCommonOptions().plugins,
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 10,
                            color: this.getThemeColors().textSecondary,
                            font: { size: 10 }
                        }
                    },
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const region = data[context.dataIndex];
                                return [
                                    region.name + ': ' + context.raw + '%',
                                    'Receita: ' + DashboardData.formatCurrency(region.revenue),
                                    'Clientes: ' + DashboardData.formatNumber(region.customers)
                                ];
                            }
                        }
                    }
                }
            }
        });
    },

    // Categories Chart (Doughnut)
    initCategoriesChart() {
        const ctx = document.getElementById('categoriesChart');
        if (!ctx) return;

        const data = DashboardData.categories;

        this.charts.categories = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.name),
                datasets: [{
                    data: data.map(d => d.value),
                    backgroundColor: data.map(d => d.color),
                    borderWidth: 0,
                    hoverOffset: 6
                }]
            },
            options: {
                ...this.getCommonOptions(),
                cutout: '55%',
                plugins: {
                    ...this.getCommonOptions().plugins,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 12,
                            color: this.getThemeColors().textSecondary,
                            font: { size: 11 }
                        }
                    },
                    tooltip: {
                        ...this.getCommonOptions().plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const cat = data[context.dataIndex];
                                return [
                                    cat.name + ': ' + context.raw + '%',
                                    'Receita: ' + DashboardData.formatCurrency(cat.revenue)
                                ];
                            }
                        }
                    }
                }
            }
        });
    }
};
