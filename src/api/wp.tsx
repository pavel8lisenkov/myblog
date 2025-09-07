export interface WPPost {
	id: number;
	title: { rendered: string };
	content: { rendered: string };
	excerpt: { rendered: string };
	date: string;
}

export const fetchPosts = async (): Promise<WPPost[]> => {
	const res = await fetch('http://localhost:8888/myblog/wp-json/wp/v2/posts');
	if (!res.ok) throw new Error('Failed to fetch posts');
	return res.json();
};

export const fetchPostById = async (id: number): Promise<WPPost> => {
	const res = await fetch(
		`http://localhost:8888/myblog/wp-json/wp/v2/posts/${id}`
	);
	if (!res.ok) throw new Error('Failed to fetch post');
	return res.json();
};
