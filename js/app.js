// =====================================================
// InsightCommerce Dashboard - Main Application
// =====================================================

const App = {
    // DOM Elements
    elements: {
        themeToggle: null,
        sidebarToggle: null,
        mobileMenuBtn: null,
        sidebar: null,
        periodFilter: null,
        notificationBtn: null,
        notificationDropdown: null,
        markReadBtn: null,
        pageTitle: null,
        pageSubtitle: null,
        dailySalesTitle: null,
        productCategoryFilter: null,
        profileBtn: null,
        profileDropdown: null,
        editProfileBtn: null,
        settingsBtn: null,
        logoutBtn: null
    },

    // Current state
    state: {
        currentPage: 'overview',
        currentPeriod: 30,
        currentCategory: 'all'
    },

    // Page titles
    pageTitles: {
        overview: { title: 'Visão Geral', subtitle: 'Acompanhe suas métricas de vendas em tempo real' },
        sales: { title: 'Vendas', subtitle: 'Análise detalhada das suas vendas' },
        customers: { title: 'Clientes', subtitle: 'Gerencie e analise seus clientes' },
        products: { title: 'Produtos', subtitle: 'Catálogo e performance dos produtos' },
        reports: { title: 'Relatórios', subtitle: 'Relatórios e análises detalhadas' },
        settings: { title: 'Configurações', subtitle: 'Preferências do sistema' }
    },

    // Initialize application
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadTheme();
        this.renderKPIs();
        this.renderOrdersTable();
        this.renderProductsSoldList();
        this.renderSalesTable();
        this.renderCustomersList();
        this.renderProductsTable();
        this.renderReportsList();
        ChartsManager.init();
    },

    // Cache DOM elements
    cacheElements() {
        this.elements.themeToggle = document.getElementById('themeToggle');
        this.elements.sidebarToggle = document.getElementById('sidebarToggle');
        this.elements.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.elements.sidebar = document.getElementById('sidebar');
        this.elements.periodFilter = document.getElementById('periodFilter');
        this.elements.notificationBtn = document.getElementById('notificationBtn');
        this.elements.notificationDropdown = document.getElementById('notificationDropdown');
        this.elements.markReadBtn = document.getElementById('markReadBtn');
        this.elements.pageTitle = document.getElementById('pageTitle');
        this.elements.pageSubtitle = document.getElementById('pageSubtitle');
        this.elements.dailySalesTitle = document.getElementById('dailySalesTitle');
        this.elements.productCategoryFilter = document.getElementById('productCategoryFilter');
        this.elements.profileBtn = document.getElementById('profileBtn');
        this.elements.profileDropdown = document.getElementById('profileDropdown');
        this.elements.editProfileBtn = document.getElementById('editProfileBtn');
        this.elements.settingsBtn = document.getElementById('settingsBtn');
        this.elements.logoutBtn = document.getElementById('logoutBtn');
    },

    // Bind event listeners
    bindEvents() {
        // Theme toggle
        if (this.elements.themeToggle) {
            this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Sidebar toggle (desktop)
        if (this.elements.sidebarToggle) {
            this.elements.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }

        // Mobile menu
        if (this.elements.mobileMenuBtn) {
            this.elements.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Period filter
        if (this.elements.periodFilter) {
            this.elements.periodFilter.addEventListener('change', (e) => this.handlePeriodChange(e));
        }

        // Product category filter
        if (this.elements.productCategoryFilter) {
            this.elements.productCategoryFilter.addEventListener('change', (e) => this.handleCategoryChange(e));
        }

        // Notification dropdown
        if (this.elements.notificationBtn) {
            this.elements.notificationBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleNotificationDropdown();
            });
        }

        // Mark all as read
        if (this.elements.markReadBtn) {
            this.elements.markReadBtn.addEventListener('click', () => this.markAllNotificationsRead());
        }

        // Close notification dropdown on outside click
        document.addEventListener('click', (e) => {
            if (this.elements.notificationDropdown &&
                !this.elements.notificationDropdown.contains(e.target) &&
                !this.elements.notificationBtn?.contains(e.target)) {
                this.closeNotificationDropdown();
            }
        });

        // Profile dropdown
        if (this.elements.profileBtn) {
            this.elements.profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleProfileDropdown();
            });
        }

        // Edit profile button
        if (this.elements.editProfileBtn) {
            this.elements.editProfileBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleEditProfile();
            });
        }

        // Settings button
        if (this.elements.settingsBtn) {
            this.elements.settingsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleSettings();
            });
        }

        // Logout button
        if (this.elements.logoutBtn) {
            this.elements.logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleLogout();
            });
        }

        // Close profile dropdown on outside click
        document.addEventListener('click', (e) => {
            if (this.elements.profileDropdown &&
                !this.elements.profileDropdown.contains(e.target) &&
                !this.elements.profileBtn?.contains(e.target)) {
                this.closeProfileDropdown();
            }
        });

        // Navigation items
        const navItems = document.querySelectorAll('.nav-item[data-page]');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Close sidebar on outside click (mobile)
        document.addEventListener('click', (e) => {
            if (this.elements.sidebar?.classList.contains('open') &&
                !this.elements.sidebar.contains(e.target) &&
                !this.elements.mobileMenuBtn?.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
                this.closeNotificationDropdown();
                this.closeProfileDropdown();
            }
        });
    },

    // ==========================================
    // Navigation
    // ==========================================
    handleNavClick(e) {
        e.preventDefault();
        const navItem = e.currentTarget;
        const page = navItem.dataset.page;

        // Update active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        navItem.classList.add('active');

        // Update page title
        this.updatePageTitle(page);

        // Show the corresponding page section
        this.showPage(page);

        // Update state
        this.state.currentPage = page;

        // Close mobile menu if open
        this.closeMobileMenu();
    },

    updatePageTitle(page) {
        const pageData = this.pageTitles[page] || this.pageTitles.overview;

        if (this.elements.pageTitle) {
            this.elements.pageTitle.textContent = pageData.title;
        }
        if (this.elements.pageSubtitle) {
            this.elements.pageSubtitle.textContent = pageData.subtitle;
        }
    },

    showPage(page) {
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target page
        const targetPage = document.getElementById(`page-${page}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // If overview, scroll to top
        if (page === 'overview') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Scroll to top of main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.scrollTop = 0;
        }
    },

    // ==========================================
    // Notification Dropdown
    // ==========================================
    toggleNotificationDropdown() {
        if (this.elements.notificationDropdown) {
            this.elements.notificationDropdown.classList.toggle('open');
        }
    },

    closeNotificationDropdown() {
        if (this.elements.notificationDropdown) {
            this.elements.notificationDropdown.classList.remove('open');
        }
    },

    markAllNotificationsRead() {
        const unreadItems = document.querySelectorAll('.notification-item.unread');
        unreadItems.forEach(item => {
            item.classList.remove('unread');
        });

        // Update badge
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    },

    // ==========================================
    // Profile Dropdown
    // ==========================================
    toggleProfileDropdown() {
        if (this.elements.profileDropdown) {
            this.elements.profileDropdown.classList.toggle('open');
        }
    },

    closeProfileDropdown() {
        if (this.elements.profileDropdown) {
            this.elements.profileDropdown.classList.remove('open');
        }
    },

    handleEditProfile() {
        this.closeProfileDropdown();
        alert('Funcionalidade de Editar Perfil será implementada em breve!');
    },

    handleSettings() {
        this.closeProfileDropdown();
        // Navigate to settings page
        const settingsNav = document.querySelector('.nav-item[data-page="settings"]');
        if (settingsNav) {
            settingsNav.click();
        }
    },

    handleLogout() {
        this.closeProfileDropdown();
        if (confirm('Tem certeza que deseja sair?')) {
            alert('Sessão encerrada com sucesso!');
            // In a real app, this would redirect to login page
        }
    },

    // ==========================================
    // Theme Management
    // ==========================================
    loadTheme() {
        const savedTheme = localStorage.getItem('dashboard-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    },

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('dashboard-theme', newTheme);

        // Update charts for new theme
        ChartsManager.updateTheme();
    },

    // ==========================================
    // Sidebar Management
    // ==========================================
    toggleSidebar() {
        this.elements.sidebar?.classList.toggle('collapsed');
    },

    toggleMobileMenu() {
        this.elements.sidebar?.classList.toggle('open');
    },

    closeMobileMenu() {
        this.elements.sidebar?.classList.remove('open');
    },

    // ==========================================
    // Period Filter
    // ==========================================
    handlePeriodChange(e) {
        const period = parseInt(e.target.value);
        this.state.currentPeriod = period;

        // Update dashboard data
        this.updateDashboardData(period);

        // Animate update
        this.animateDataUpdate();
    },

    // ==========================================
    // Category Filter
    // ==========================================
    handleCategoryChange(e) {
        const category = e.target.value;
        this.state.currentCategory = category;
        this.renderProductsSoldList(category);
    },

    updateDashboardData(period) {
        const periodData = DashboardData.periodData[period];
        if (!periodData) return;

        // Update KPIs
        this.renderKPIs(periodData.kpis);

        // Update daily sales chart title
        this.updateDailySalesTitle(period);

        // Update charts with filtered data
        ChartsManager.updateData(period);

        // Update orders table
        this.renderOrdersTable(period);
    },

    updateDailySalesTitle(period) {
        if (this.elements.dailySalesTitle) {
            const titles = {
                7: 'Vendas Diárias (Últimos 7 dias)',
                30: 'Vendas Diárias (Últimos 30 dias)',
                90: 'Vendas Diárias (Últimos 90 dias)',
                365: 'Vendas Diárias (Último ano)'
            };
            this.elements.dailySalesTitle.textContent = titles[period] || titles[30];
        }
    },

    // ==========================================
    // KPI Cards
    // ==========================================
    renderKPIs(kpisData = null) {
        const kpis = kpisData || DashboardData.kpis;

        const revenueEl = document.getElementById('kpiRevenue');
        const ordersEl = document.getElementById('kpiOrders');
        const avgTicketEl = document.getElementById('kpiAvgTicket');
        const conversionEl = document.getElementById('kpiConversion');

        // Update revenue
        if (revenueEl) {
            revenueEl.textContent = DashboardData.formatCurrency(kpis.revenue.value);
            this.updateBadge('revenue', kpis.revenue.change);
        }

        // Update orders
        if (ordersEl) {
            ordersEl.textContent = DashboardData.formatNumber(kpis.orders.value);
            this.updateBadge('orders', kpis.orders.change);
        }

        // Update avg ticket
        if (avgTicketEl) {
            avgTicketEl.textContent = DashboardData.formatCurrency(kpis.avgTicket.value);
            this.updateBadge('avgTicket', kpis.avgTicket.change);
        }

        // Update conversion
        if (conversionEl) {
            conversionEl.textContent = DashboardData.formatPercentage(kpis.conversion.value);
            this.updateBadge('conversion', kpis.conversion.change);
        }
    },

    updateBadge(kpiName, change) {
        const kpiCards = document.querySelectorAll('.kpi-card');
        const kpiIndex = { revenue: 0, orders: 1, avgTicket: 2, conversion: 3 };
        const card = kpiCards[kpiIndex[kpiName]];

        if (card) {
            const badge = card.querySelector('.kpi-badge');
            if (badge) {
                const isPositive = change >= 0;
                badge.textContent = (isPositive ? '+' : '') + change.toFixed(1) + '%';
                badge.className = 'kpi-badge ' + (isPositive ? 'positive' : 'negative');
            }
        }
    },

    // ==========================================
    // Orders Table
    // ==========================================
    renderOrdersTable(period = 30) {
        const tbody = document.getElementById('ordersTableBody');
        if (!tbody) return;

        // Filter orders based on period
        let orders = DashboardData.recentOrders;
        if (period === 7) {
            orders = orders.slice(0, 8);
        } else if (period === 30) {
            orders = orders.slice(0, 15);
        } else if (period === 90) {
            orders = orders.slice(0, 25);
        } else {
            orders = orders.slice(0, 40);
        }

        tbody.innerHTML = orders.map(order => `
            <tr>
                <td><span class="table-order-id">${order.id}</span></td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td>${DashboardData.formatCurrency(order.value)}</td>
                <td><span class="table-channel">${order.channel}</span></td>
                <td><span class="table-status ${order.status}">${this.getStatusLabel(order.status)}</span></td>
                <td>${order.date}</td>
            </tr>
        `).join('');
    },

    // Get status label in Portuguese
    getStatusLabel(status) {
        const labels = {
            delivered: 'Entregue',
            processing: 'Processando',
            pending: 'Pendente',
            cancelled: 'Cancelado'
        };
        return labels[status] || status;
    },

    // ==========================================
    // Products Sold List
    // ==========================================
    renderProductsSoldList(category = 'all') {
        const container = document.getElementById('productsSoldList');
        if (!container) return;

        let products = DashboardData.productsSold;
        if (category !== 'all') {
            products = products.filter(p => p.category === category);
        }

        // Sort by totalRevenue descending
        products = [...products].sort((a, b) => b.totalRevenue - a.totalRevenue);

        // Get category icons
        const categoryIcons = {
            smartphones: '📱',
            notebooks: '💻',
            accessories: '🎧',
            tablets: '📟',
            wearables: '⌚'
        };

        // Calculate totals
        const totalUnits = products.reduce((sum, p) => sum + p.quantitySold, 0);
        const totalRevenue = products.reduce((sum, p) => sum + p.totalRevenue, 0);

        // Update summary
        const totalUnitsEl = document.getElementById('totalUnitsSold');
        const totalRevenueEl = document.getElementById('totalProductsRevenue');
        const productsCountEl = document.getElementById('productsCount');

        if (totalUnitsEl) {
            totalUnitsEl.textContent = DashboardData.formatNumber(totalUnits);
        }
        if (totalRevenueEl) {
            totalRevenueEl.textContent = DashboardData.formatCurrency(totalRevenue);
        }
        if (productsCountEl) {
            productsCountEl.textContent = `${products.length} produtos`;
        }

        // Render list
        container.innerHTML = products.map(product => `
            <div class="product-sold-item">
                <div class="product-icon">${categoryIcons[product.category] || '📦'}</div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <span class="product-category">${this.getCategoryLabel(product.category)}</span>
                </div>
                <div class="product-stats">
                    <span class="product-stat-value">${DashboardData.formatNumber(product.quantitySold)}</span>
                    <span class="product-stat-label">unidades</span>
                </div>
                <div class="product-revenue">
                    ${DashboardData.formatCurrency(product.totalRevenue)}
                </div>
                <div class="product-trend ${product.trend}">
                    ${product.trend === 'up' ? '↑' : '↓'} ${product.trendPercent}%
                </div>
            </div>
        `).join('');
    },

    // Get category label in Portuguese
    getCategoryLabel(category) {
        const labels = {
            smartphones: 'Smartphones',
            notebooks: 'Notebooks',
            accessories: 'Acessórios',
            tablets: 'Tablets',
            wearables: 'Wearables'
        };
        return labels[category] || category;
    },

    // ==========================================
    // Sales Table (Page)
    // ==========================================
    renderSalesTable() {
        const tbody = document.getElementById('salesTableBody');
        if (!tbody) return;

        const orders = DashboardData.recentOrders;

        tbody.innerHTML = orders.map(order => `
            <tr>
                <td><span class="table-order-id">${order.id}</span></td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td>${DashboardData.formatCurrency(order.value)}</td>
                <td><span class="table-channel">${order.channel}</span></td>
                <td><span class="table-status ${order.status}">${this.getStatusLabel(order.status)}</span></td>
                <td>${order.date}</td>
            </tr>
        `).join('');
    },

    // ==========================================
    // Customers List (Page)
    // ==========================================
    renderCustomersList(statusFilter = 'all') {
        const container = document.getElementById('customersList');
        if (!container) return;

        let customers = DashboardData.customers;
        if (statusFilter !== 'all') {
            customers = customers.filter(c => c.status === statusFilter);
        }

        // Sort by totalSpent descending
        customers = [...customers].sort((a, b) => b.totalSpent - a.totalSpent);

        container.innerHTML = customers.map(customer => {
            const initials = customer.name.split(' ').map(n => n[0]).join('').substring(0, 2);
            return `
                <div class="customer-card">
                    <div class="customer-card-header">
                        <div class="customer-avatar ${customer.status}">${initials}</div>
                        <div class="customer-info">
                            <h4>${customer.name}</h4>
                            <p>${customer.email}</p>
                        </div>
                        <span class="customer-status ${customer.status}">${customer.status.toUpperCase()}</span>
                    </div>
                    <div class="customer-details">
                        <div class="customer-detail">
                            <span class="customer-detail-label">Telefone</span>
                            <span class="customer-detail-value">${customer.phone}</span>
                        </div>
                        <div class="customer-detail">
                            <span class="customer-detail-label">Cidade</span>
                            <span class="customer-detail-value">${customer.city} - ${customer.state}</span>
                        </div>
                        <div class="customer-detail">
                            <span class="customer-detail-label">Total de Pedidos</span>
                            <span class="customer-detail-value">${customer.orders} pedidos</span>
                        </div>
                        <div class="customer-detail">
                            <span class="customer-detail-label">Total Gasto</span>
                            <span class="customer-detail-value highlight">${DashboardData.formatCurrency(customer.totalSpent)}</span>
                        </div>
                        <div class="customer-detail">
                            <span class="customer-detail-label">Última Compra</span>
                            <span class="customer-detail-value">${customer.lastPurchase}</span>
                        </div>
                        <div class="customer-detail">
                            <span class="customer-detail-label">Cliente desde</span>
                            <span class="customer-detail-value">${customer.joinDate}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    // ==========================================
    // Products Table (Page)
    // ==========================================
    renderProductsTable(category = 'all') {
        const tbody = document.getElementById('productsTableBody');
        if (!tbody) return;

        let products = DashboardData.productsSold;
        if (category !== 'all') {
            products = products.filter(p => p.category === category);
        }

        // Sort by totalRevenue descending
        products = [...products].sort((a, b) => b.totalRevenue - a.totalRevenue);

        tbody.innerHTML = products.map(product => `
            <tr>
                <td><strong>${product.name}</strong></td>
                <td>${this.getCategoryLabel(product.category)}</td>
                <td>${DashboardData.formatCurrency(product.unitPrice)}</td>
                <td>${DashboardData.formatNumber(product.quantitySold)}</td>
                <td><strong>${DashboardData.formatCurrency(product.totalRevenue)}</strong></td>
                <td>${product.stock} unidades</td>
                <td>
                    <span class="product-trend ${product.trend}">
                        ${product.trend === 'up' ? '↑' : '↓'} ${product.trendPercent}%
                    </span>
                </td>
            </tr>
        `).join('');
    },

    // ==========================================
    // Reports List (Page)
    // ==========================================
    renderReportsList() {
        const container = document.getElementById('reportsList');
        if (!container) return;

        const reports = DashboardData.reports;

        const typeIcons = {
            sales: '📊',
            products: '📦',
            customers: '👥',
            financial: '💰',
            inventory: '📉',
            marketing: '📣',
            logistics: '🚚',
            satisfaction: '⭐'
        };

        const statusLabels = {
            completed: 'Concluído',
            pending: 'Pendente',
            processing: 'Processando',
            alert: 'Alerta'
        };

        container.innerHTML = reports.map(report => `
            <div class="report-card">
                <div class="report-icon ${report.type}">${typeIcons[report.type] || '📄'}</div>
                <div class="report-info">
                    <h4>${report.title}</h4>
                    <p>${report.description}</p>
                </div>
                <div class="report-meta">
                    <div class="report-detail">
                        <span class="report-detail-label">Período</span>
                        <span class="report-detail-value">${report.period}</span>
                    </div>
                    <div class="report-detail">
                        <span class="report-detail-label">Data</span>
                        <span class="report-detail-value">${report.date}</span>
                    </div>
                    <div class="report-detail">
                        <span class="report-detail-label">Tamanho</span>
                        <span class="report-detail-value">${report.size}</span>
                    </div>
                    <span class="report-status ${report.status}">${statusLabels[report.status]}</span>
                </div>
                <div class="report-actions">
                    <button class="btn-icon" title="Download">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2V10M8 10L5 7M8 10L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12V13C2 13.6 2.4 14 3 14H13C13.6 14 14 13.6 14 13V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <button class="btn-icon" title="Visualizar">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
    },

    // ==========================================
    // Animations
    // ==========================================
    animateDataUpdate() {
        const kpiCards = document.querySelectorAll('.kpi-card');
        kpiCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'scale(0.98)';
                card.style.opacity = '0.7';
                setTimeout(() => {
                    card.style.transform = '';
                    card.style.opacity = '';
                }, 200);
            }, index * 50);
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
