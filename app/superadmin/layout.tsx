import { ReactNode } from 'react';

export default function SuperadminLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<h1>Superadmin Layout</h1>
			{children}
		</div>
	);
}
