import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { Role, User } from './pages/api/me';
import { use, cache } from 'react';

async function getMe(): Promise<User> {
	const res = await fetch('http://localhost:3000/api/me');
	return res.json();
}

export async function middleware(request: NextRequest) {
	console.log(request.cookies.getAll());

	const me = await getMe();

	if (me.role === Role.USER) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	if (me.role === Role.ADMIN) {
		return NextResponse.json(
			{
				success: false,
				message: "Authentication failed for user with 'ADMIN' role",
			},
			{
				status: 401,
				headers: { 'content-type': 'application/json' },
			},
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/superadmin/:path*'],
};
