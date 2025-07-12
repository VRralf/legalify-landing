/**
 * Helper function to get the correct asset path for GitHub Pages
 * This adds the basePath when in production
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), add the basePath
  if (process.env.NODE_ENV === 'production') {
    return `/legalify-landing/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
}
