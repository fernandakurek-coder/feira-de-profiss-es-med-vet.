document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile (Hamburger)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Gráfico de Rosca - Distribuição das Áreas de Atuação
    const ctxAreas = document.getElementById('areasChart');
    if (ctxAreas) {
        new Chart(ctxAreas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Clínica e Cirurgia Pet', 'Produção/Aves/Bovinos', 'Inspeção e Saúde Pública', 'Análises e Pesquisa', 'Outros'],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        '#0d9488',
                        '#f59e0b',
                        '#3b82f6',
                        '#8b5cf6',
                        '#cbd5e1'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // 3. Gráfico de Linha - Projeção do Mercado
    const ctxTrend = document.getElementById('trendChart');
    if (ctxTrend) {
        new Chart(ctxTrend.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2021', '2022', '2023', '2024', '2025', '2026 (Proj.)'],
                datasets: [{
                    label: 'Faturamento do Mercado Vet/Pet (em R$ Bi)',
                    data: [51.9, 60.2, 68.7, 76.5, 84.1, 92.0],
                    borderColor: '#0d9488',
                    backgroundColor: 'rgba(13, 148, 136, 0.1)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
});
