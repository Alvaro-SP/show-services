import { defineCollection, z } from 'astro:content';

const site = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string().default('Wil'),
    tagline: z.string(),
    descripcion: z.string().optional(),
    whatsapp: z.string(),
    mensajeWhatsapp: z.string().default('Hola Willy, vi tu página y quiero cotizar un show'),
    instagram: z.string().optional(),
    tiktok: z.string().optional(),
    facebook: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const servicios = defineCollection({
  type: 'data',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string().default('🎈'),
    orden: z.number().default(0),
  }),
});

const eventos = defineCollection({
  type: 'data',
  schema: z.object({
    titulo: z.string(),
    imagen: z.string(),
    descripcion: z.string().optional(),
    fecha: z.string().optional(),
  }),
});

const testimonios = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    texto: z.string(),
    evento: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    pregunta: z.string(),
    respuesta: z.string(),
    orden: z.number().default(0),
  }),
});

export const collections = { site, servicios, eventos, testimonios, faq };
