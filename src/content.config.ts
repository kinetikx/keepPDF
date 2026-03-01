import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        author: z.string().default('KeepPDF Team'),
        category: z.string().default('general'),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(),
        translationKey: z.string().optional(),
    }),
});

export const collections = { blog };
