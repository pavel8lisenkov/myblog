import { useEffect, useState } from 'react';
import type { WPPost } from '../api/wp';
import { fetchPosts } from '../api/wp';

export default function HomePage() {
	const [posts, setPosts] = useState<WPPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPosts()
			.then(data => setPosts(data))
			.catch(err => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p className='text-center mt-10'>Загрузка...</p>;

	return (
		<div className='max-w-3xl mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-6'>Мой блог</h1>
			<div className='space-y-6'>
				{posts.map(post => (
					<div
						key={post.id}
						className='border p-4 rounded-xl shadow hover:shadow-lg transition'
					>
						<h2
							className='text-xl font-semibold mb-2'
							dangerouslySetInnerHTML={{ __html: post.title.rendered }}
						/>
						<div
							className='prose prose-sm text-gray-600'
							dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
