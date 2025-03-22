import { Contact } from "@components/contact/contact";
import { Curriculum } from "@components/curriculum/curriculum";
import { Header } from "@components/header/header";
import { Home } from "@components/home/home";
import { Projects } from "@components/projects/projects";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => (

    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/about" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)