import React, {forwardRef, useEffect, useState} from "react";
import {
    StyledProjectContainer,
    StyledProjectSection,
    StyledProjectList,
    StyledProjectListItem,
    StyledProject,
    StyledShadowBox,
    StyledProjectImg,
    StyledProjectContent,
    StyledProjectName,
    StyledProjectDesc,
    StyledProjectLink,
    StyledSpan,
    StyledListTech,
    StyledTechText,
    StyledTechItem,
    StyledH2,
    StyledArchiveLink,
    StyledArchiveSection,
    StyledSpanArchive,
} from "@styles/projects/ProjectStyle";
import { ArrowUpRight, ArrowRight } from "@components/Icons/arrow";

interface Repo {
    displayName: string;
    topics: any[];
    description: string;
    imageUrl: string;
    name: string;
    stargazers_count: number;
    html_url: string;
}

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const repoDisplayNameMapping = {
        'nathan-v3': 'Nathan V3',
        'rustlings': 'Rustlings',
        'rust-openai-chatbox': 'Rust OpenAI Chatbox',
        'chat': 'AI Chat',
        'invaders': 'Invaders Game',
        'flutter-history-app': 'Flutter History App'
    };
    const pinnedRepos = ['nathan-v3', 'rustlings', 'rust-openai-chatbox', 'chat', 'invaders', 'flutter-history-app'];

    const fetchAllRepos = async (username: string) => {
        let page = 1;
        let repos: any[] = [];

        while (true) {
            const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`);
            const data = await response.json();

            if (data.length === 0) {
                break;
            }

            repos = [...repos, ...data];
            page++;
        }

        return repos;
    };

    useEffect(() => {
        fetchAllRepos('nathannewyen')
            .then(data => {
                const filteredData = data.filter((repo: any) => pinnedRepos.includes(repo.name));
                const reposWithImages = filteredData.map((repo: Repo) => {
                    // @ts-ignore
                    return {...repo, imageUrl: `/images/${repo.name}.png`, displayName: repoDisplayNameMapping[repo.name]};
                });
                setRepos(reposWithImages);
            });
    }, []);

    return (
        <StyledProjectContainer id={"project"} ref={ref}>
            <StyledH2>Projects</StyledH2>
            <StyledProjectSection>
                <StyledProjectList>
                    {repos.map((repo, index) => (
                        <StyledProjectLink key={index} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <StyledProjectListItem
                                style={{opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5}}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                    <StyledProject>
                                        <StyledShadowBox/>
                                        <StyledProjectContent>
                                            <StyledProjectName>
                                                    {repo.displayName}
                                                    <StyledSpan>
                                                        <ArrowUpRight/>
                                                    </StyledSpan>
                                            </StyledProjectName>
                                            <StyledProjectDesc>
                                                {repo.description}
                                            </StyledProjectDesc>
                                            <StyledListTech>
                                                {repo.topics.map((tech: any, techIndex: number) => (
                                                    <StyledTechItem key={techIndex}>
                                                        <StyledTechText>
                                                            {tech}
                                                        </StyledTechText>
                                                    </StyledTechItem>
                                                ))}
                                            </StyledListTech>
                                        </StyledProjectContent>
                                        <StyledProjectImg width={120} height={65} src={repo.imageUrl}/>
                                    </StyledProject>
                            </StyledProjectListItem>
                        </StyledProjectLink>
                    ))}
                </StyledProjectList>
                <StyledArchiveSection>
                    <StyledArchiveLink href="/archive">
                            <StyledSpanArchive>
                                View Full Project Archive
                            </StyledSpanArchive>
                            <ArrowRight />
                    </StyledArchiveLink>
                </StyledArchiveSection>
            </StyledProjectSection>
        </StyledProjectContainer>
    );
});

Projects.displayName = 'Projects';
export default Projects;