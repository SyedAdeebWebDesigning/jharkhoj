"use server";

import { put } from "@vercel/blob";

export async function uploadAvatar(file: File) {
	// Upload directly to Vercel Blob
	const blob = await put(file.name, file, {
		access: "public", // or "private"
	});

	return blob.url; // return the URL to the client
}
