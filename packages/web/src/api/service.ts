
import { client } from "./sanityClient";
import { Apidata } from "@interfaces/types";

export async function getInfo(section:string) {

    if (section === 'project') {
        const response = await client.fetch<Apidata[]>(`*[_type == "${section}"] | order(_createdAt asc) {_id, title, slug, description, image}`);
        return response
    } else {
        const response = await client.fetch<Apidata[]>(`*[_type == "${section}"]{_id, title, description, image}`);
        return response
    }

}


