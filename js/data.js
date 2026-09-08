// =====================================================
// InsightCommerce Dashboard - Mock Data (Completo)
// =====================================================

const DashboardData = {
    // ==========================================
    // KPI Metrics by Period
    // ==========================================
    periodData: {
        7: {
            kpis: {
                revenue: { value: 98450.75, change: 5.2, label: 'Receita Total' },
                orders: { value: 632, change: 3.8, label: 'Total de Pedidos' },
                avgTicket: { value: 155.78, change: 1.4, label: 'Ticket Médio' },
                conversion: { value: 3.42, change: 0.8, label: 'Taxa de Conversão' }
            },
            dailySalesCount: 7
        },
        30: {
            kpis: {
                revenue: { value: 2847563.42, change: 12.5, label: 'Receita Total' },
                orders: { value: 18432, change: 8.2, label: 'Total de Pedidos' },
                avgTicket: { value: 154.48, change: 3.8, label: 'Ticket Médio' },
                conversion: { value: 3.24, change: -0.5, label: 'Taxa de Conversão' }
            },
            dailySalesCount: 30
        },
        90: {
            kpis: {
                revenue: { value: 8124580.00, change: 18.3, label: 'Receita Total' },
                orders: { value: 52340, change: 14.6, label: 'Total de Pedidos' },
                avgTicket: { value: 155.22, change: 3.2, label: 'Ticket Médio' },
                conversion: { value: 3.18, change: -1.2, label: 'Taxa de Conversão' }
            },
            dailySalesCount: 30
        },
        365: {
            kpis: {
                revenue: { value: 28475634.20, change: 24.8, label: 'Receita Total' },
                orders: { value: 184320, change: 19.5, label: 'Total de Pedidos' },
                avgTicket: { value: 154.48, change: 4.5, label: 'Ticket Médio' },
                conversion: { value: 3.05, change: -2.1, label: 'Taxa de Conversão' }
            },
            dailySalesCount: 30
        }
    },

    // ==========================================
    // KPI Metrics (Default - 30 days)
    // ==========================================
    kpis: {
        revenue: {
            value: 2847563.42,
            change: 12.5,
            label: 'Receita Total',
            previousValue: 2531167.49
        },
        orders: {
            value: 18432,
            change: 8.2,
            label: 'Total de Pedidos',
            previousValue: 17035
        },
        avgTicket: {
            value: 154.48,
            change: 3.8,
            label: 'Ticket Médio',
            previousValue: 148.82
        },
        conversion: {
            value: 3.24,
            change: -0.5,
            label: 'Taxa de Conversão',
            previousValue: 3.26
        }
    },

    // ==========================================
    // Histórico de Vendas Mensais (24 meses)
    // ==========================================
    monthlySales: [
        // 2025
        { month: 'Jan/25', revenue: 142000, orders: 920, year: 2025 },
        { month: 'Fev/25', revenue: 156000, orders: 1010, year: 2025 },
        { month: 'Mar/25', revenue: 168000, orders: 1085, year: 2025 },
        { month: 'Abr/25', revenue: 155000, orders: 1005, year: 2025 },
        { month: 'Mai/25', revenue: 178000, orders: 1145, year: 2025 },
        { month: 'Jun/25', revenue: 192000, orders: 1235, year: 2025 },
        { month: 'Jul/25', revenue: 205000, orders: 1320, year: 2025 },
        { month: 'Ago/25', revenue: 218000, orders: 1400, year: 2025 },
        { month: 'Set/25', revenue: 198000, orders: 1275, year: 2025 },
        { month: 'Out/25', revenue: 225000, orders: 1450, year: 2025 },
        { month: 'Nov/25', revenue: 268000, orders: 1720, year: 2025 },
        { month: 'Dez/25', revenue: 312000, orders: 2010, year: 2025 },
        // 2026
        { month: 'Jan/26', revenue: 185000, orders: 1200, year: 2026 },
        { month: 'Fev/26', revenue: 198000, orders: 1280, year: 2026 },
        { month: 'Mar/26', revenue: 215000, orders: 1350, year: 2026 },
        { month: 'Abr/26', revenue: 192000, orders: 1240, year: 2026 },
        { month: 'Mai/26', revenue: 228000, orders: 1420, year: 2026 },
        { month: 'Jun/26', revenue: 245000, orders: 1510, year: 2026 },
        { month: 'Jul/26', revenue: 262000, orders: 1580, year: 2026 },
        { month: 'Ago/26', revenue: 278000, orders: 1650, year: 2026 },
        { month: 'Set/26', revenue: 256000, orders: 1540, year: 2026 },
        { month: 'Out/26', revenue: 289000, orders: 1720, year: 2026 },
        { month: 'Nov/26', revenue: 312000, orders: 1850, year: 2026 },
        { month: 'Dez/26', revenue: 345000, orders: 2010, year: 2026 }
    ],

    // ==========================================
    // Vendas Diárias (Últimos 30 dias)
    // ==========================================
    dailySales: [
        { date: '09/08', revenue: 12450, orders: 82, visitors: 4520 },
        { date: '08/08', revenue: 15320, orders: 98, visitors: 5180 },
        { date: '07/08', revenue: 14180, orders: 91, visitors: 4890 },
        { date: '06/08', revenue: 11890, orders: 76, visitors: 4210 },
        { date: '05/08', revenue: 13560, orders: 87, visitors: 4650 },
        { date: '04/08', revenue: 16780, orders: 108, visitors: 5420 },
        { date: '03/08', revenue: 18920, orders: 122, visitors: 5890 },
        { date: '02/08', revenue: 17650, orders: 114, visitors: 5610 },
        { date: '01/08', revenue: 15430, orders: 99, visitors: 5230 },
        { date: '31/07', revenue: 14280, orders: 92, visitors: 4920 },
        { date: '30/07', revenue: 13150, orders: 85, visitors: 4580 },
        { date: '29/07', revenue: 16890, orders: 109, visitors: 5340 },
        { date: '28/07', revenue: 19240, orders: 124, visitors: 6020 },
        { date: '27/07', revenue: 20150, orders: 130, visitors: 6280 },
        { date: '26/07', revenue: 18760, orders: 121, visitors: 5780 },
        { date: '25/07', revenue: 16540, orders: 107, visitors: 5410 },
        { date: '24/07', revenue: 15230, orders: 98, visitors: 5090 },
        { date: '23/07', revenue: 14870, orders: 96, visitors: 4870 },
        { date: '22/07', revenue: 17650, orders: 114, visitors: 5560 },
        { date: '21/07', revenue: 19870, orders: 128, visitors: 5980 },
        { date: '20/07', revenue: 21340, orders: 138, visitors: 6450 },
        { date: '19/07', revenue: 19560, orders: 126, visitors: 6120 },
        { date: '18/07', revenue: 17230, orders: 111, visitors: 5670 },
        { date: '17/07', revenue: 15890, orders: 102, visitors: 5280 },
        { date: '16/07', revenue: 14560, orders: 94, visitors: 4950 },
        { date: '15/07', revenue: 16780, orders: 108, visitors: 5390 },
        { date: '14/07', revenue: 18450, orders: 119, visitors: 5820 },
        { date: '13/07', revenue: 20670, orders: 133, visitors: 6310 },
        { date: '12/07', revenue: 22340, orders: 144, visitors: 6780 },
        { date: '11/07', revenue: 19870, orders: 128, visitors: 6150 }
    ],

    // ==========================================
    // Histórico de Clientes (24 meses)
    // ==========================================
    customerHistory: [
        // 2025
        { month: 'Jan/25', newCustomers: 320, returningCustomers: 580, totalCustomers: 4520 },
        { month: 'Fev/25', newCustomers: 345, returningCustomers: 610, totalCustomers: 4780 },
        { month: 'Mar/25', newCustomers: 380, returningCustomers: 645, totalCustomers: 5090 },
        { month: 'Abr/25', newCustomers: 355, returningCustomers: 620, totalCustomers: 5230 },
        { month: 'Mai/25', newCustomers: 410, returningCustomers: 685, totalCustomers: 5560 },
        { month: 'Jun/25', newCustomers: 445, returningCustomers: 720, totalCustomers: 5890 },
        { month: 'Jul/25', newCustomers: 478, returningCustomers: 765, totalCustomers: 6210 },
        { month: 'Ago/25', newCustomers: 512, returningCustomers: 810, totalCustomers: 6580 },
        { month: 'Set/25', newCustomers: 468, returningCustomers: 758, totalCustomers: 6820 },
        { month: 'Out/25', newCustomers: 525, returningCustomers: 835, totalCustomers: 7180 },
        { month: 'Nov/25', newCustomers: 612, returningCustomers: 945, totalCustomers: 7750 },
        { month: 'Dez/25', newCustomers: 720, returningCustomers: 1085, totalCustomers: 8420 },
        // 2026
        { month: 'Jan/26', newCustomers: 420, returningCustomers: 780, totalCustomers: 8650 },
        { month: 'Fev/26', newCustomers: 458, returningCustomers: 822, totalCustomers: 8980 },
        { month: 'Mar/26', newCustomers: 495, returningCustomers: 875, totalCustomers: 9350 },
        { month: 'Abr/26', newCustomers: 465, returningCustomers: 845, totalCustomers: 9620 },
        { month: 'Mai/26', newCustomers: 538, returningCustomers: 912, totalCustomers: 10050 },
        { month: 'Jun/26', newCustomers: 582, returningCustomers: 968, totalCustomers: 10520 },
        { month: 'Jul/26', newCustomers: 625, returningCustomers: 1025, totalCustomers: 11040 },
        { month: 'Ago/26', newCustomers: 668, returningCustomers: 1082, totalCustomers: 11580 },
        { month: 'Set/26', newCustomers: 615, returningCustomers: 1035, totalCustomers: 12050 },
        { month: 'Out/26', newCustomers: 692, returningCustomers: 1128, totalCustomers: 12620 },
        { month: 'Nov/26', newCustomers: 785, returningCustomers: 1245, totalCustomers: 13350 },
        { month: 'Dez/26', newCustomers: 892, returningCustomers: 1385, totalCustomers: 14180 }
    ],

    // ==========================================
    // Vendas por Canal
    // ==========================================
    channels: [
        { name: 'Website Próprio', value: 42, color: '#3b82f6', revenue: 1195976.64 },
        { name: 'Marketplace', value: 28, color: '#8b5cf6', revenue: 797317.76 },
        { name: 'App Mobile', value: 18, color: '#22c55e', revenue: 512561.42 },
        { name: 'Redes Sociais', value: 8, color: '#f59e0b', revenue: 227805.07 },
        { name: 'Outros', value: 4, color: '#6b7280', revenue: 113902.53 }
    ],

    // ==========================================
    // Top Produtos
    // ==========================================
    topProducts: [
        { name: 'iPhone 15 Pro', sales: 1245, revenue: 1568750, category: 'Smartphones' },
        { name: 'MacBook Air M3', sales: 892, revenue: 1338000, category: 'Notebooks' },
        { name: 'AirPods Pro 2', sales: 2341, revenue: 702300, category: 'Acessórios' },
        { name: 'iPad Air', sales: 678, revenue: 542400, category: 'Tablets' },
        { name: 'Apple Watch SE', sales: 1123, revenue: 449200, category: 'Wearables' },
        { name: 'Samsung Galaxy S24', sales: 987, revenue: 887300, category: 'Smartphones' },
        { name: 'Dell XPS 15', sales: 534, revenue: 1068000, category: 'Notebooks' },
        { name: 'Sony WH-1000XM5', sales: 1856, revenue: 556800, category: 'Acessórios' },
        { name: 'iPad Pro 12.9"', sales: 423, revenue: 634500, category: 'Tablets' },
        { name: 'Apple Watch Ultra', sales: 312, revenue: 468000, category: 'Wearables' }
    ],

    // ==========================================
    // Categorias de Produtos
    // ==========================================
    categories: [
        { name: 'Smartphones', value: 35, revenue: 996647.20, color: '#3b82f6' },
        { name: 'Notebooks', value: 25, revenue: 711890.86, color: '#8b5cf6' },
        { name: 'Acessórios', value: 20, revenue: 569512.68, color: '#22c55e' },
        { name: 'Tablets', value: 12, revenue: 341707.61, color: '#f59e0b' },
        { name: 'Wearables', value: 8, revenue: 227805.07, color: '#ef4444' }
    ],

    // ==========================================
    // Produtos Vendidos Detalhados
    // ==========================================
    productsSold: [
        { 
            id: 1, 
            name: 'iPhone 15 Pro Max 256GB', 
            category: 'smartphones',
            unitPrice: 9499.00, 
            quantitySold: 245, 
            totalRevenue: 2327255.00,
            stock: 38,
            trend: 'up',
            trendPercent: 12.5
        },
        { 
            id: 2, 
            name: 'MacBook Air M3 512GB', 
            category: 'notebooks',
            unitPrice: 14999.00, 
            quantitySold: 189, 
            totalRevenue: 2834811.00,
            stock: 24,
            trend: 'up',
            trendPercent: 8.3
        },
        { 
            id: 3, 
            name: 'AirPods Pro 2', 
            category: 'accessories',
            unitPrice: 1899.00, 
            quantitySold: 534, 
            totalRevenue: 1014066.00,
            stock: 67,
            trend: 'up',
            trendPercent: 15.2
        },
        { 
            id: 4, 
            name: 'iPad Air 256GB', 
            category: 'tablets',
            unitPrice: 7999.00, 
            quantitySold: 156, 
            totalRevenue: 1247844.00,
            stock: 31,
            trend: 'down',
            trendPercent: 3.1
        },
        { 
            id: 5, 
            name: 'Apple Watch SE 2', 
            category: 'wearables',
            unitPrice: 2499.00, 
            quantitySold: 278, 
            totalRevenue: 694722.00,
            stock: 45,
            trend: 'up',
            trendPercent: 5.7
        },
        { 
            id: 6, 
            name: 'Samsung Galaxy S24 Ultra', 
            category: 'smartphones',
            unitPrice: 8999.00, 
            quantitySold: 198, 
            totalRevenue: 1781802.00,
            stock: 42,
            trend: 'up',
            trendPercent: 10.4
        },
        { 
            id: 7, 
            name: 'Dell XPS 15', 
            category: 'notebooks',
            unitPrice: 12999.00, 
            quantitySold: 112, 
            totalRevenue: 1455888.00,
            stock: 18,
            trend: 'down',
            trendPercent: 2.8
        },
        { 
            id: 8, 
            name: 'Sony WH-1000XM5', 
            category: 'accessories',
            unitPrice: 1899.00, 
            quantitySold: 423, 
            totalRevenue: 803077.00,
            stock: 56,
            trend: 'up',
            trendPercent: 7.9
        },
        { 
            id: 9, 
            name: 'iPad Pro 12.9" M2', 
            category: 'tablets',
            unitPrice: 14999.00, 
            quantitySold: 89, 
            totalRevenue: 1334911.00,
            stock: 15,
            trend: 'up',
            trendPercent: 4.2
        },
        { 
            id: 10, 
            name: 'Apple Watch Ultra 2', 
            category: 'wearables',
            unitPrice: 6499.00, 
            quantitySold: 67, 
            totalRevenue: 435433.00,
            stock: 22,
            trend: 'up',
            trendPercent: 11.8
        },
        { 
            id: 11, 
            name: 'iPhone 15 Pro 128GB', 
            category: 'smartphones',
            unitPrice: 8999.00, 
            quantitySold: 312, 
            totalRevenue: 2807688.00,
            stock: 53,
            trend: 'up',
            trendPercent: 9.6
        },
        { 
            id: 12, 
            name: 'MacBook Pro 14" M3', 
            category: 'notebooks',
            unitPrice: 19999.00, 
            quantitySold: 78, 
            totalRevenue: 1559922.00,
            stock: 12,
            trend: 'up',
            trendPercent: 6.4
        },
        { 
            id: 13, 
            name: 'AirPods 3', 
            category: 'accessories',
            unitPrice: 1299.00, 
            quantitySold: 687, 
            totalRevenue: 892413.00,
            stock: 89,
            trend: 'up',
            trendPercent: 18.3
        },
        { 
            id: 14, 
            name: 'Samsung Galaxy Tab S9', 
            category: 'tablets',
            unitPrice: 5999.00, 
            quantitySold: 134, 
            totalRevenue: 803866.00,
            stock: 28,
            trend: 'down',
            trendPercent: 1.9
        },
        { 
            id: 15, 
            name: 'Apple Watch Series 9', 
            category: 'wearables',
            unitPrice: 3499.00, 
            quantitySold: 198, 
            totalRevenue: 692802.00,
            stock: 37,
            trend: 'up',
            trendPercent: 8.1
        }
    ],

    // ==========================================
    // Tipos de Clientes
    // ==========================================
    customerTypes: {
        new: 35,
        returning: 65
    },

    // ==========================================
    // Vendas por Região
    // ==========================================
    regions: [
        { name: 'Sudeste', value: 45, revenue: 1281403.54, customers: 6381 },
        { name: 'Sul', value: 22, revenue: 626463.95, customers: 3118 },
        { name: 'Nordeste', value: 18, revenue: 512561.42, customers: 2551 },
        { name: 'Centro-Oeste', value: 10, revenue: 284756.34, customers: 1418 },
        { name: 'Norte', value: 5, revenue: 142378.17, customers: 709 }
    ],

    // ==========================================
    // Pedidos Recentes (30 pedidos)
    // ==========================================
    recentOrders: [
        { id: '#PED-7901', customer: 'Fernanda Costa', email: 'fernanda@email.com', product: 'iPhone 15 Pro Max 256GB', value: 9499.00, status: 'delivered', date: '09/09/2026', channel: 'Website' },
        { id: '#PED-7900', customer: 'Ricardo Mendes', email: 'ricardo@email.com', product: 'MacBook Air M3 512GB', value: 14999.00, status: 'processing', date: '09/09/2026', channel: 'App Mobile' },
        { id: '#PED-7899', customer: 'Camila Santos', email: 'camila@email.com', product: 'AirPods Pro 2', value: 1899.00, status: 'delivered', date: '09/09/2026', channel: 'Marketplace' },
        { id: '#PED-7898', customer: 'Lucas Oliveira', email: 'lucas@email.com', product: 'iPad Air 256GB', value: 7999.00, status: 'pending', date: '08/09/2026', channel: 'Website' },
        { id: '#PED-7897', customer: 'Ana Beatriz Lima', email: 'ana@email.com', product: 'Apple Watch SE 2', value: 2499.00, status: 'delivered', date: '08/09/2026', channel: 'Redes Sociais' },
        { id: '#PED-7896', customer: 'Marcos Pereira', email: 'marcos@email.com', product: 'Samsung Galaxy S24 Ultra', value: 8999.00, status: 'cancelled', date: '08/09/2026', channel: 'Website' },
        { id: '#PED-7895', customer: 'Juliana Ferreira', email: 'juliana@email.com', product: 'MacBook Pro 14" M3', value: 19999.00, status: 'processing', date: '07/09/2026', channel: 'App Mobile' },
        { id: '#PED-7894', customer: 'Pedro Henrique', email: 'pedro@email.com', product: 'AirPods 3', value: 1299.00, status: 'delivered', date: '07/09/2026', channel: 'Marketplace' },
        { id: '#PED-7893', customer: 'Mariana Almeida', email: 'mariana@email.com', product: 'iPhone 15 Pro 128GB', value: 8999.00, status: 'delivered', date: '07/09/2026', channel: 'Website' },
        { id: '#PED-7892', customer: 'Gabriel Souza', email: 'gabriel@email.com', product: 'Dell XPS 15', value: 12999.00, status: 'processing', date: '06/09/2026', channel: 'Website' },
        { id: '#PED-7891', customer: 'Isabela Rodrigues', email: 'isabela@email.com', product: 'iPad Pro 12.9" M2', value: 14999.00, status: 'delivered', date: '06/09/2026', channel: 'App Mobile' },
        { id: '#PED-7890', customer: 'Thiago Ribeiro', email: 'thiago@email.com', product: 'Sony WH-1000XM5', value: 1899.00, status: 'delivered', date: '06/09/2026', channel: 'Marketplace' },
        { id: '#PED-7889', customer: 'Patricia Campos', email: 'patricia@email.com', product: 'Apple Watch Ultra 2', value: 6499.00, status: 'pending', date: '05/09/2026', channel: 'Website' },
        { id: '#PED-7888', customer: 'Rafael Gomes', email: 'rafael@email.com', product: 'iPhone 15 128GB', value: 6499.00, status: 'delivered', date: '05/09/2026', channel: 'Redes Sociais' },
        { id: '#PED-7887', customer: 'Amanda Barros', email: 'amanda@email.com', product: 'MacBook Air M3 256GB', value: 11999.00, status: 'cancelled', date: '05/09/2026', channel: 'Website' },
        { id: '#PED-7886', customer: 'Felipe Carvalho', email: 'felipe@email.com', product: 'AirPods Max', value: 4499.00, status: 'delivered', date: '04/09/2026', channel: 'App Mobile' },
        { id: '#PED-7885', customer: 'Bianca Martins', email: 'bianca@email.com', product: 'Samsung Galaxy Tab S9', value: 5999.00, status: 'processing', date: '04/09/2026', channel: 'Marketplace' },
        { id: '#PED-7884', customer: 'Leonardo Dias', email: 'leonardo@email.com', product: 'iPad mini 6', value: 4999.00, status: 'delivered', date: '04/09/2026', channel: 'Website' },
        { id: '#PED-7883', customer: 'Vanessa Lopes', email: 'vanessa@email.com', product: 'Apple Watch Series 9', value: 3499.00, status: 'delivered', date: '03/09/2026', channel: 'Redes Sociais' },
        { id: '#PED-7882', customer: 'Diego Nascimento', email: 'diego@email.com', product: 'iPhone 15 Pro Max 512GB', value: 11499.00, status: 'processing', date: '03/09/2026', channel: 'Website' },
        { id: '#PED-7881', customer: 'Priscila Araujo', email: 'priscila@email.com', product: 'MacBook Pro 16" M3', value: 24999.00, status: 'delivered', date: '03/09/2026', channel: 'App Mobile' },
        { id: '#PED-7880', customer: 'Bruno Vieira', email: 'bruno@email.com', product: 'Sony WF-1000XM5', value: 1299.00, status: 'delivered', date: '02/09/2026', channel: 'Marketplace' },
        { id: '#PED-7879', customer: 'Larissa Monteiro', email: 'larissa@email.com', product: 'iPad Air M2 256GB', value: 8999.00, status: 'pending', date: '02/09/2026', channel: 'Website' },
        { id: '#PED-7878', customer: 'Gustavo Barbosa', email: 'gustavo@email.com', product: 'Samsung Galaxy S24+', value: 6999.00, status: 'delivered', date: '02/09/2026', channel: 'Redes Sociais' },
        { id: '#PED-7877', customer: 'Tatiane Rocha', email: 'tatiane@email.com', product: 'Apple Watch SE 1st Gen', value: 1999.00, status: 'cancelled', date: '01/09/2026', channel: 'Website' },
        { id: '#PED-7876', customer: 'Andre Lima', email: 'andre@email.com', product: 'MacBook Air M2', value: 9999.00, status: 'delivered', date: '01/09/2026', channel: 'App Mobile' },
        { id: '#PED-7875', customer: 'Renata Silva', email: 'renata@email.com', product: 'iPhone 14 128GB', value: 5499.00, status: 'delivered', date: '01/09/2026', channel: 'Marketplace' },
        { id: '#PED-7874', customer: 'Eduardo Campos', email: 'eduardo@email.com', product: 'Dell XPS 13', value: 9999.00, status: 'processing', date: '31/08/2026', channel: 'Website' },
        { id: '#PED-7873', customer: 'Carol Fernandes', email: 'carol@email.com', product: 'AirPods Pro 2 USB-C', value: 1999.00, status: 'delivered', date: '31/08/2026', channel: 'Redes Sociais' },
        { id: '#PED-7872', customer: 'Marcelo Teixeira', email: 'marcelo@email.com', product: 'iPad Pro 11" M2', value: 10999.00, status: 'delivered', date: '31/08/2026', channel: 'App Mobile' },
        { id: '#PED-7871', customer: 'Natalia Reis', email: 'natalia@email.com', product: 'Sony WH-1000XM4', value: 1499.00, status: 'delivered', date: '30/08/2026', channel: 'Marketplace' },
        { id: '#PED-7870', customer: 'Alexandre Pinto', email: 'alexandre@email.com', product: 'Samsung Galaxy Z Flip5', value: 7499.00, status: 'processing', date: '30/08/2026', channel: 'Website' },
        { id: '#PED-7869', customer: 'Flavia Moreira', email: 'flavia@email.com', product: 'Apple Watch Ultra', value: 5999.00, status: 'delivered', date: '30/08/2026', channel: 'App Mobile' },
        { id: '#PED-7868', customer: 'Roberto Neto', email: 'roberto@email.com', product: 'iPhone 15 Plus 256GB', value: 7999.00, status: 'delivered', date: '29/08/2026', channel: 'Website' },
        { id: '#PED-7867', customer: 'Virginia Tavares', email: 'virginia@email.com', product: 'MacBook Pro 14" M3 Pro', value: 22999.00, status: 'cancelled', date: '29/08/2026', channel: 'Marketplace' },
        { id: '#PED-7866', customer: 'Sergio Lima', email: 'sergio@email.com', product: 'AirPods 3', value: 1299.00, status: 'delivered', date: '29/08/2026', channel: 'Redes Sociais' },
        { id: '#PED-7865', customer: 'Adriana Castro', email: 'adriana@email.com', product: 'iPad 10th Gen 64GB', value: 3499.00, status: 'delivered', date: '28/08/2026', channel: 'Website' },
        { id: '#PED-7864', customer: 'Marcio Azevedo', email: 'marcio@email.com', product: 'Samsung Galaxy S24 FE', value: 4499.00, status: 'processing', date: '28/08/2026', channel: 'App Mobile' },
        { id: '#PED-7863', customer: 'Cristina Ramos', email: 'cristina@email.com', product: 'Apple Watch Series 8', value: 2999.00, status: 'delivered', date: '28/08/2026', channel: 'Marketplace' },
        { id: '#PED-7862', customer: 'Paulo Henrique', email: 'paulo@email.com', product: 'MacBook Air M3 15"', value: 15999.00, status: 'delivered', date: '27/08/2026', channel: 'Website' },
        { id: '#PED-7861', customer: 'Michele Duarte', email: 'michele@email.com', product: 'iPhone 15 Pro 256GB', value: 9999.00, status: 'pending', date: '27/08/2026', channel: 'Redes Sociais' }
    ],

    // ==========================================
    // Clientes
    // ==========================================
    customers: [
        { id: 1, name: 'Maria Silva', email: 'maria.silva@email.com', phone: '(11) 99999-1234', city: 'São Paulo', state: 'SP', orders: 12, totalSpent: 45678.90, lastPurchase: '08/09/2026', status: 'active', joinDate: '15/03/2024' },
        { id: 2, name: 'João Santos', email: 'joao.santos@email.com', phone: '(21) 98888-5678', city: 'Rio de Janeiro', state: 'RJ', orders: 8, totalSpent: 32456.00, lastPurchase: '07/09/2026', status: 'active', joinDate: '22/06/2024' },
        { id: 3, name: 'Ana Oliveira', email: 'ana.oliveira@email.com', phone: '(31) 97777-9012', city: 'Belo Horizonte', state: 'MG', orders: 15, totalSpent: 67890.50, lastPurchase: '09/09/2026', status: 'active', joinDate: '10/01/2024' },
        { id: 4, name: 'Pedro Costa', email: 'pedro.costa@email.com', phone: '(41) 96666-3456', city: 'Curitiba', state: 'PR', orders: 6, totalSpent: 23456.70, lastPurchase: '05/09/2026', status: 'active', joinDate: '05/08/2024' },
        { id: 5, name: 'Luciana Ferreira', email: 'luciana.f@email.com', phone: '(51) 95555-7890', city: 'Porto Alegre', state: 'RS', orders: 9, totalSpent: 34567.80, lastPurchase: '06/09/2026', status: 'active', joinDate: '18/11/2023' },
        { id: 6, name: 'Carlos Mendes', email: 'carlos.mendes@email.com', phone: '(71) 94444-1234', city: 'Salvador', state: 'BA', orders: 11, totalSpent: 41234.60, lastPurchase: '04/09/2026', status: 'active', joinDate: '30/04/2024' },
        { id: 7, name: 'Juliana Lima', email: 'juliana.lima@email.com', phone: '(61) 93333-5678', city: 'Brasília', state: 'DF', orders: 7, totalSpent: 28901.30, lastPurchase: '03/09/2026', status: 'active', joinDate: '12/07/2024' },
        { id: 8, name: 'Roberto Almeida', email: 'roberto.a@email.com', phone: '(85) 92222-9012', city: 'Fortaleza', state: 'CE', orders: 14, totalSpent: 56789.00, lastPurchase: '08/09/2026', status: 'active', joinDate: '25/02/2024' },
        { id: 9, name: 'Fernanda Costa', email: 'fernanda.c@email.com', phone: '(92) 91111-3456', city: 'Manaus', state: 'AM', orders: 5, totalSpent: 19876.40, lastPurchase: '01/09/2026', status: 'inactive', joinDate: '08/09/2023' },
        { id: 10, name: 'Ricardo Mendes', email: 'ricardo.m@email.com', phone: '(81) 90000-7890', city: 'Recife', state: 'PE', orders: 10, totalSpent: 38901.20, lastPurchase: '07/09/2026', status: 'active', joinDate: '14/05/2024' },
        { id: 11, name: 'Patricia Campos', email: 'patricia.c@email.com', phone: '(11) 98765-4321', city: 'São Paulo', state: 'SP', orders: 18, totalSpent: 78901.50, lastPurchase: '09/09/2026', status: 'vip', joinDate: '02/01/2023' },
        { id: 12, name: 'Gabriel Souza', email: 'gabriel.s@email.com', phone: '(21) 97654-3210', city: 'Rio de Janeiro', state: 'RJ', orders: 4, totalSpent: 15678.90, lastPurchase: '02/09/2026', status: 'active', joinDate: '20/10/2024' },
        { id: 13, name: 'Isabela Rodrigues', email: 'isabela.r@email.com', phone: '(31) 96543-2109', city: 'Belo Horizonte', state: 'MG', orders: 13, totalSpent: 52345.60, lastPurchase: '06/09/2026', status: 'active', joinDate: '07/06/2023' },
        { id: 14, name: 'Thiago Ribeiro', email: 'thiago.r@email.com', phone: '(41) 95432-1098', city: 'Curitiba', state: 'PR', orders: 7, totalSpent: 26789.00, lastPurchase: '05/09/2026', status: 'active', joinDate: '15/12/2024' },
        { id: 15, name: 'Vanessa Lopes', email: 'vanessa.l@email.com', phone: '(51) 94321-0987', city: 'Porto Alegre', state: 'RS', orders: 9, totalSpent: 35678.40, lastPurchase: '04/09/2026', status: 'active', joinDate: '28/03/2024' },
        { id: 16, name: 'Diego Nascimento', email: 'diego.n@email.com', phone: '(71) 93210-9876', city: 'Salvador', state: 'BA', orders: 6, totalSpent: 22345.70, lastPurchase: '03/09/2026', status: 'active', joinDate: '09/08/2024' },
        { id: 17, name: 'Priscila Araujo', email: 'priscila.a@email.com', phone: '(61) 92109-8765', city: 'Brasília', state: 'DF', orders: 16, totalSpent: 62345.80, lastPurchase: '08/09/2026', status: 'vip', joinDate: '11/02/2023' },
        { id: 18, name: 'Bruno Vieira', email: 'bruno.v@email.com', phone: '(85) 91098-7654', city: 'Fortaleza', state: 'CE', orders: 8, totalSpent: 31234.90, lastPurchase: '06/09/2026', status: 'active', joinDate: '23/07/2024' },
        { id: 19, name: 'Larissa Monteiro', email: 'larissa.m@email.com', phone: '(92) 90987-6543', city: 'Manaus', state: 'AM', orders: 3, totalSpent: 12345.60, lastPurchase: '01/09/2026', status: 'inactive', joinDate: '17/11/2024' },
        { id: 20, name: 'Gustavo Barbosa', email: 'gustavo.b@email.com', phone: '(81) 99876-5432', city: 'Recife', state: 'PE', orders: 11, totalSpent: 43210.50, lastPurchase: '07/09/2026', status: 'active', joinDate: '04/04/2024' }
    ],

    // ==========================================
    // Relatórios
    // ==========================================
    reports: [
        { id: 1, title: 'Relatório de Vendas Mensal', type: 'sales', description: 'Análise completa das vendas do mês', date: '01/09/2026', status: 'completed', period: 'Agosto 2026', size: '2.4 MB' },
        { id: 2, title: 'Performance de Produtos', type: 'products', description: 'Análise de performance e estoque dos produtos', date: '05/09/2026', status: 'completed', period: 'Setembro 2026', size: '1.8 MB' },
        { id: 3, title: 'Análise de Clientes', type: 'customers', description: 'Perfil e comportamento dos clientes', date: '01/09/2026', status: 'completed', period: 'Agosto 2026', size: '3.1 MB' },
        { id: 4, title: 'Relatório Financeiro', type: 'financial', description: 'Fluxo de caixa e demonstrativo financeiro', date: '08/09/2026', status: 'pending', period: 'Setembro 2026', size: '1.5 MB' },
        { id: 5, title: 'Estoques Baixos', type: 'inventory', description: 'Produtos com estoque abaixo do mínimo', date: '09/09/2026', status: 'alert', period: 'Atual', size: '0.8 MB' },
        { id: 6, title: 'Campanhas de Marketing', type: 'marketing', description: 'ROI e performance das campanhas', date: '01/09/2026', status: 'completed', period: 'Agosto 2026', size: '2.7 MB' },
        { id: 7, title: 'Relatório de Frete', type: 'logistics', description: 'Custos e prazos de entrega', date: '05/09/2026', status: 'completed', period: 'Agosto 2026', size: '1.2 MB' },
        { id: 8, title: 'Satisfação do Cliente', type: ' satisfaction', description: 'Pesquisa de satisfação e NPS', date: '01/09/2026', status: 'processing', period: 'Agosto 2026', size: '1.9 MB' }
    ],

    // ==========================================
    // Métodos de Formatação
    // ==========================================
    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    },

    formatNumber(value) {
        return new Intl.NumberFormat('pt-BR').format(value);
    },

    formatPercentage(value) {
        return value.toFixed(2).replace('.', ',') + '%';
    },

    // Formatar data para exibição
    formatDate(dateString) {
        const [day, month, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    }
};
