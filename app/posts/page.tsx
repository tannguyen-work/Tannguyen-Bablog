import type { Metadata } from "next";
import { sortedPosts, allTags } from "@/content/posts";
import PostsBrowser from "@/components/PostsBrowser";

export const metadata: Metadata = {
  title: "Posts — Tất cả bài viết",
  description: "Danh sách toàn bộ bài viết về Business Analysis.",
};

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = sortedPosts();
  const tags = allTags();

  return (
    <div className="container-wide page">
      <div className="page-head">
        <div className="page-head-badge">~/posts</div>
        <h1 className="page-title">TẤT CẢ BÀI VIẾT</h1>
        <p className="page-desc">
          // {posts.length} bài · {tags.length} tags · tìm kiếm và lọc ngay bên dưới
        </p>
      </div>

      <PostsBrowser posts={posts} tags={tags} initialTag={tag} />
    </div>
  );
}
