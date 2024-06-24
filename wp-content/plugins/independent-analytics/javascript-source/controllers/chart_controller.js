import {Controller} from "@hotwired/stimulus"
import corsairPlugin from '../chart_plugins/corsair_plugin'
import htmlLegendPlugin from '../chart_plugins/html_legend_plugin'
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

export default class extends Controller {
    static values = {
        locale: String,
        currency: {
            type: String,
            default: 'USD'
        },
        preview: Boolean,
        usingWooCommerce: Boolean,
        labels: Array,
        views: Array,
        visitors: Array,
        sessions: Array,
        woocommerceOrders: Array,
        woocommerceNetSales: Array,
        visibleDatasets: Array
    }

    get locale() {
        try {
            new Intl.NumberFormat(this.localeValue)
            return this.localeValue
        } catch (e) {
            return 'en-US'
        }
    }

    isPreview() {
        return this.previewValue === true
    }

    isUsingWooCommerce() {
        return this.usingWooCommerceValue === true
    }

    formatCurrency(value) {
        return new Intl.NumberFormat(this.localeValue, {
            style: 'currency',
            currency: this.currencyValue,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    }

    tooltipTitle(tooltip) {
        const label = JSON.parse(tooltip[0].label)

        return label.tooltipLabel
    }

    tooltipLabel(tooltip) {
        if (typeof tooltip.dataset.tooltipLabel === 'function') {
            return tooltip.dataset.tooltipLabel(tooltip)
        }

        return tooltip.dataset.label + ': ' + tooltip.formattedValue
    }

    tickText(value) {
        const label = JSON.parse(this.getLabelForValue(value))

        return label.tick
    }

    currencyTickText = (value) => {
        return this.formatCurrency(value)
    }

    getVisitorsDataset() {
        return {
            id: 'visitors',
            label: iawpText.visitors,
            data: this.visitorsValue,
            borderColor: 'rgba(246,157,10,1)',
            fill: true,
            backgroundColor: 'rgba(246,157,10,0.2)',
            pointBackgroundColor: 'rgba(246,157,10,1)',
            tension: 0.4,
            yAxisID: 'y',
            hidden: !this.visibleDatasetsValue.includes('visitors')
        }
    }

    getViewsDataset() {
        return {
            id: 'views',
            label: iawpText.views,
            data: this.viewsValue,
            borderColor: 'rgba(108,70,174,1)',
            fill: true,
            backgroundColor: 'rgba(108,70,174,0.2)',
            pointBackgroundColor: 'rgba(108,70,174,1)',
            tension: 0.4,
            yAxisID: 'y',
            hidden: !this.visibleDatasetsValue.includes('views')
        }
    }

    getSessionsDataset() {
        if (this.isPreview()) {
            return null;
        }

        return {
            id: 'sessions',
            label: iawpText.sessions,
            data: this.sessionsValue,
            borderColor: 'rgba(217, 59, 41, 1)',
            fill: true,
            backgroundColor: 'rgba(217, 59, 41, 0.2)',
            pointBackgroundColor: 'rgba(217, 59, 41, 1)',
            tension: 0.4,
            yAxisID: 'y',
            hidden: !this.visibleDatasetsValue.includes('sessions')
        }
    }

    getOrdersDataset() {
        if (this.isPreview() || !this.isUsingWooCommerce()) {
            return null;
        }

        return {
            id: 'orders',
            label: iawpText.orders,
            data: this.woocommerceOrdersValue,
            borderColor: 'rgba(35, 125, 68, 1)',
            fill: true,
            backgroundColor: 'rgba(35, 125, 68, .2)',
            pointBackgroundColor: 'rgba(35, 125, 68, 1)',
            tension: 0.4,
            yAxisID: 'y1',
            hidden: !this.visibleDatasetsValue.includes('orders')
        }
    }

    getNetSalesDataset() {
        if (this.isPreview() || !this.isUsingWooCommerce()) {
            return null;
        }

        return {
            id: 'net-sales',
            label: iawpText.netSales,
            data: this.woocommerceNetSalesValue,
            borderColor: 'rgba(52, 152, 219, 1)',
            fill: true,
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            pointBackgroundColor: 'rgba(52, 152, 219, 1)',
            tension: 0.4,
            yAxisID: 'y2',
            tooltipLabel: (tooltip) => {
                return tooltip.dataset.label + ': ' + this.formatCurrency(tooltip.raw)
            },
            hidden: !this.visibleDatasetsValue.includes('net-sales')
        }
    }

    connect() {
        Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
        const element = document.getElementById('myChart');
        const labels = this.labelsValue

        const data = {
            labels: labels,
            datasets: ([
                this.getVisitorsDataset(),
                this.getViewsDataset(),
                this.getSessionsDataset(),
                this.getOrdersDataset(),
                this.getNetSalesDataset()
            ]).filter((dataset) => dataset !== null)
        };

        const options = {
            locale: this.locale,
            animation: {
                duration: 0
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            scales: {
                y: {
                    title: {
                        text: `${iawpText.visitors} / ${iawpText.views} / ${iawpText.sessions}`,
                        display: this.previewValue ? false : true
                    },
                    grid: {
                        borderColor: '#DEDAE6',
                        tickColor: '#DEDAE6',
                        display: true,
                        drawOnChartArea: true,
                        borderDash: [2, 4]
                    },
                    beginAtZero: true,
                    suggestedMax: 10,
                    // grace: '26%',
                    ticks: {
                        color: document.body.classList.contains('iawp-dark-mode') ? '#ffffff' : '#6D6A73',
                        font: {
                            size: 14,
                            weight: 400,
                        },
                        precision: 0
                    },
                },
                y1: {

                    title: {
                        text: iawpText.orders,
                        display: true,
                        color: 'rgba(35, 125, 68, 1)',
                    },
                    position: 'right',
                    display: 'auto',
                    grid: {
                        borderColor: 'rgba(35, 125, 68, 1)',
                        tickColor: 'rgba(35, 125, 68, 1)',
                        display: false,
                        drawOnChartArea: false,
                        borderDash: [2, 4]
                    },
                    beginAtZero: true,
                    suggestedMax: 10,
                    // grace: '26%',
                    ticks: {
                        // color: document.body.classList.contains('iawp-dark-mode') ? '#ffffff' : '#6D6A73',
                        color: 'rgba(35, 125, 68, 1)',
                        font: {
                            size: 14,
                            weight: 400,
                        },
                        precision: 0,
                    },
                },
                y2: {
                    title: {
                        text: iawpText.netSales,
                        display: true,
                        color: 'rgba(52, 152, 219, 1)',
                    },
                    position: 'right',
                    display: 'auto',
                    grid: {
                        borderColor: 'rgba(52, 152, 219, 1)',
                        tickColor: 'rgba(52, 152, 219, 1)',
                        display: false,
                        drawOnChartArea: false,
                        borderDash: [2, 4]
                    },
                    beginAtZero: true,
                    suggestedMax: 10,
                    // grace: '26%',
                    ticks: {
                        // color: document.body.classList.contains('iawp-dark-mode') ? '#ffffff' : '#6D6A73',
                        color: 'rgba(52, 152, 219, 1)',
                        font: {
                            size: 14,
                            weight: 400,
                        },
                        precision: 0,
                        callback: this.currencyTickText
                    },
                },
                x: {
                    grid: {
                        borderColor: '#DEDAE6',
                        tickColor: '#DEDAE6',
                        display: true,
                        drawOnChartArea: false,
                    },
                    ticks: {
                        color: document.body.classList.contains('iawp-dark-mode') ? '#ffffff' : '#6D6A73',
                        autoSkip: true,
                        autoSkipPadding: 16,
                        maxRotation: 0,
                        // maxTicksLimit: 20,
                        font: {
                            size: 14,
                            weight: 400
                        },
                        callback: this.tickText
                    },
                },
            },
            plugins: {
                mode: String, // 'light' or 'dark'
                htmlLegend: {
                    container: element.parentNode.querySelector('.legend'),
                    callback: function (visibleDatasets) {
                        // Todo - Actually track visible datasets
                        document.dispatchEvent(
                            new CustomEvent('iawp:changeVisibleDatasets', {
                                detail: {
                                    visibleDatasets: visibleDatasets
                                }
                            })
                        )
                    }
                },
                legend: {
                    display: false
                },
                corsair: {
                    dash: [2, 4],
                    color: '#777',
                    width: 1
                },
                tooltip: {
                    callbacks: {
                        title: this.tooltipTitle,
                        label: this.tooltipLabel
                    }
                }
            },
            elements: {
                point: {
                    radius: 4
                }
            }
        }

        const config = {
            type: 'line',
            data: data,
            options: options,
            plugins: [
                htmlLegendPlugin,
                corsairPlugin

            ],
        };

        window.iawp_chart = new Chart(element, config);
    }
}