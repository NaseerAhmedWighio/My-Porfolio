import { defineType, defineField } from "sanity";

export const Resume = defineType({
    name: "resume",
    title: "Resume Uploads",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Main Title",
            type: "string",
            description: "A title for this resume collection (e.g., 'My Resumes')",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "resumes",
            title: "Resume List",
            type: "array",
            description: "Add and reorder your resumes. The first one in this list will be used for the download button.",
            of: [
                {
                    type: "object",
                    title: "Resume Item",
                    fields: [
                        {
                            name: "title",
                            title: "Resume Title",
                            type: "string",
                        },
                        {
                            name: "slug",
                            title: "Slug",
                            type: "slug",
                            options: {
                                source: (doc: { title?: string }, options: { parent: { title?: string } }) => options.parent.title,
                            },
                        },
                        {
                            name: "resumeFile",
                            title: "Resume File (PDF)",
                            type: "file",
                            options: {
                                accept: ".pdf",
                            },
                        },
                    ],
                },
            ],
        }),
    ],
});
