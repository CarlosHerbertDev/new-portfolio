import { defineType, defineField } from "sanity";

export const contact = defineType({
    name:'contact',
    title:'Contact',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            title: 'apresentação inicial',
            type: 'string'
        }),
        defineField({
            name: 'description_about',
            title: 'fale sobre você',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'uma foto sua',
            type: 'image'
        })
    ]
})