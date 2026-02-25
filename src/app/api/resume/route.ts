import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    // Fetch the resume URL from Sanity
    const query = `*[_type == "resume"][0].resumes[0].resumeFile.asset->url`;
    const resumeUrl = await client.fetch(query);

    if (!resumeUrl) {
      return NextResponse.json(
        { error: 'Resume not found' },
        { status: 404 }
      );
    }

    // Fetch the PDF file from Sanity CDN
    const response = await fetch(resumeUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch resume' },
        { status: response.status }
      );
    }

    // Get the PDF content as an ArrayBuffer
    const pdfBuffer = await response.arrayBuffer();

    // Get content type from the original response or default to application/pdf
    const contentType = response.headers.get('content-type') || 'application/pdf';

    // Return the PDF with attachment header to trigger download
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'attachment; filename="resume.pdf"',
        'Cache-Control': 'private, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching resume:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
