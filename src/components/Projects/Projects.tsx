import React, { useState, useEffect } from "react";
import {
    StyledProjectContainer,
    StyledOrderedList,
    StyledList,
    StyledListItem,
    StyledProjectSection,
    StyledInnerListItem,
    StyledProjectTime,
    StyledWorkTitle,
    StyledListTech,
    StyledTechItem,
    StyledTechText
} from "@/styles/projects/ProjectStyle";

const Projects = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch('/data/projects.md')
            .then(response => response.text())
            .then(markdown => {
                const html = markdownToHtml(markdown);
                setHtmlContent(html);
            });
    }, []);

    return (
        <StyledProjectContainer dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

function markdownToHtml(markdown: string) {
    let html = markdown
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\n$/gim, '<br />');

    return html.trim();
}

export default Projects;