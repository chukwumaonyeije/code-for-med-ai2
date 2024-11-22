import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vph9jt0x', // Replace with your Sanity project ID
  dataset: 'production',         // Replace with your dataset name (usually 'production')
  apiVersion: '2023-11-01',      // Use the current ISO date for versioning
  useCdn: true,                  // Enable CDN for faster data retrieval
});

export default client;
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vph9jt0x', // Replace with your Sanity project ID
  dataset: 'production',         // Replace with your dataset name (usually 'production')
  apiVersion: '2023-11-01',      // Use the current ISO date for versioning
  useCdn: true,                  // Enable CDN for faster data retrieval
});

export default client;
