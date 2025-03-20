import { defineType, defineField } from "sanity";

export const curriculum = defineType({
    name:'curriculum',
    title:'Curriculum',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            title: 'project title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Url do projeto',
            type: 'slug',
            options: {source: 'title'},
        }),
        defineField({
            name: 'description',
            title: 'descrição do projeto',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'image'
        })
    ]
})