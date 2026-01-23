import { z } from 'zod';

export const propertySchema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
  price: z.number().min(10000),
  beds: z.number().min(1),
  baths: z.number().min(1),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});