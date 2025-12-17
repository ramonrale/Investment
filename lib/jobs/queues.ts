import { Queue, Worker, QueueScheduler } from 'bullmq';
import Redis from 'ioredis';

const connection = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export const analyticsQueue = new Queue('analytics', { connection });
new QueueScheduler('analytics', { connection });

export function registerAnalyticsWorker(handler: (jobName: string, data: any) => Promise<void>) {
  return new Worker(
    'analytics',
    async (job) => {
      await handler(job.name, job.data);
    },
    { connection }
  );
}
