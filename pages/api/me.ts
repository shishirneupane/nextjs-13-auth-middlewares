// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export enum Role {
	SUPERADMIN = 'superadmin',
	ADMIN = 'admin',
	USER = 'user',
}

export type User = {
	name: string;
	email: string;
	role: Role;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<User>) {
	res.status(200).json({ name: 'John Doe', email: 'johndoe@outside.tech', role: Role.USER });
}
