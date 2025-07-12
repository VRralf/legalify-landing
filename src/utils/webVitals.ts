// Simple web vitals implementation for Next.js
export interface Metric {
  id: string;
  name: string;
  value: number;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Function to send metrics to analytics
function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics 4 if available in production
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      custom_parameter_1: 'web_vitals',
    });
  }

  // Log in development for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
      rating: metric.rating
    });
  }
}

// Basic performance monitoring without external dependencies
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  try {
    // Monitor Core Web Vitals using PerformanceObserver
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        sendToAnalytics({
          id: 'lcp-' + Date.now(),
          name: 'LCP',
          value: lastEntry.startTime,
          delta: lastEntry.startTime,
          rating: lastEntry.startTime <= 2500 ? 'good' : lastEntry.startTime <= 4000 ? 'needs-improvement' : 'poor'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              id: 'fcp-' + Date.now(),
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              rating: entry.startTime <= 1800 ? 'good' : entry.startTime <= 3000 ? 'needs-improvement' : 'poor'
            });
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        
        sendToAnalytics({
          id: 'cls-' + Date.now(),
          name: 'CLS',
          value: clsValue,
          delta: clsValue,
          rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor'
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      console.log('[Web Vitals] Monitoring initialized successfully');
    }
  } catch (error) {
    console.warn('[Web Vitals] Performance Observer not supported or failed to initialize:', error);
  }
}

// Hook for Next.js _app.tsx
export function reportWebVitals(metric: Metric) {
  sendToAnalytics(metric);
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      parameters: {
        value?: number;
        metric_id?: string;
        metric_value?: number;
        metric_delta?: number;
        custom_parameter_1?: string;
      }
    ) => void;
  }
}
