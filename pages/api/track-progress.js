// pages/api/track-progress.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { goal, current_progress, challenges } = req.body;

        try {
            // Aqui você pode atualizar o progresso no banco de dados
            const updatedProgress = await prisma.progress.create({
                data: {
                    goal,
                    current_progress,
                    challenges: challenges.join(', '), // ou como preferir
                },
            });
            return res.status(201).json(updatedProgress);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to track progress' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
