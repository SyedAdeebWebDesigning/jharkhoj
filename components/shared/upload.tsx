"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { uploadAvatar } from "@/lib/actions/upload";

export default function Upload() {
	const [url, setUrl] = useState<string | null>(null);

	async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;

		// Call server action directly
		const blobUrl = await uploadAvatar(file);
		setUrl(blobUrl);
		console.log("✅ Uploaded avatar:", blobUrl);
	}

	return (
		<div className="flex flex-col items-center space-y-4 p-6">
			{/* Avatar Preview */}
			{url ? (
				<img
					src={url}
					alt="avatar"
					className="w-32 h-32 rounded object-cover border shadow"
				/>
			) : (
				<div className="w-32 h-32 rounded bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-gray-500">
					No Avatar
				</div>
			)}

			{/* File Upload Input */}
			<Input type="file" accept="image/*" onChange={handleUpload} />
		</div>
	);
}
