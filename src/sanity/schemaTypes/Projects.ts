import {defineType } from "sanity";

    export const Project = defineType({
        name: 'project',
        title: 'Projects',
        type: 'document',
        fields: [
            {
                name: "title",
                title: "Project Name",
                type : "string",
                description : "Enter Project Name"
            },
            {
                name: 'slug',
                type: 'slug',
                description : "Project Serail no."
            },
            {
                name: 'link',
                type: 'string',
                description : "Project link"
            },
            {
                name: "category",
                title: "Category",
                type : "string",
                description : "Project category"
            },
            {
                name: "image",
                title: "Project Thumbnail",
                type : "image",
                description : "Select Thumbnail"
            },
            {
                name: "description",
                title: "Project Description",
                type : "string",
                description : "Enter Project Description"
            },
        ],
    })