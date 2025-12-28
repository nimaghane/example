'use client';

import { useState } from "react";

export default function AdminBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">افزودن بلاگ</h1>

      <input
        className="border w-full p-2 mb-4"
        placeholder="عنوان"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border w-full p-2 mb-4"
        rows={5}
        placeholder="محتوا"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {
          console.log({ title, content });
          alert("فعلاً فقط در کنسول ثبت شد");
        }}
      >
        ثبت
      </button>
    </main>
  );
}
