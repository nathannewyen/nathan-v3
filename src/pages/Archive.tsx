"use client"

import React, { useEffect, useState } from 'react';
import { ArchiveStyleContainer, ArchiveStyleBody, ArchiveStyleNameButton, ArchiveStyleH1, ArchiveStyleTable, ArchiveStyleTh, ArchiveStyleThead, ArchiveStyleTd, StyledListTech, StyledTechItem, StyledTechText, ArchiveStyleTr, ArchiveStyleTdLink, ArchiveStyleTdName, StyleLoadingContainer } from '@/styles/archive/ArchiveStyle';
import { ArrowLeft, ArrowUpRight } from "@components/Icons/arrow";
import LoadingIcon  from "@components/Icons/loading";
import { useRouter } from 'next/navigation'

interface Repo {
    name: string;
    created_at: string;
    updated_at: string;
    html_url: string;
    topics: any[];
    owner: {
        login: string;
    };
}
const Archive = () => {
    const router = useRouter()
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            setIsLoading(true);
            let page = 1;
            let repos: Repo[] = [];

            // Fetch the repos and wait for the delay to finish
            await Promise.all([
                (async () => {
                    while (page <= 5) {
                        const response = await fetch(`https://api.github.com/users/nathannewyen/repos?per_page=100&page=${page}`);
                        const data: Repo[] = await response.json();

                        if (data.length === 0) {
                            break;
                        }

                        repos = [...repos, ...data];
                        page++;
                    }

                    const sortedData = repos.sort((a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                    const latest30Repos = sortedData.slice(0, 30);
                    setRepos(latest30Repos);
                })(),
            ]);
            setIsLoading(false);
        };
        fetchRepos();
    }, []);

    const formatName = (name: string) => {
        // Replace hyphens, underscores, and dots with spaces
        let formattedName = name.replace(/[-_.]/g, ' ');

        // Split the name into words
        let words = formattedName.split(' ');

        // Capitalize the first letter of each word
        words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

        // Join the words back together
        formattedName = words.join(' ');

        return formattedName;
    };

    return (
        <ArchiveStyleContainer>
            <ArchiveStyleBody>
                <ArchiveStyleNameButton onClick={() => router.push('/')}>
                    <ArrowLeft />Nhan Nguyen
                </ArchiveStyleNameButton>
                <ArchiveStyleH1>All Projects</ArchiveStyleH1>
                {
                    isLoading ?
                        <StyleLoadingContainer>
                            <LoadingIcon />
                        </StyleLoadingContainer>
                        :
                        <ArchiveStyleTable>
                            <ArchiveStyleThead>
                                <tr>
                                    <ArchiveStyleTh>Year</ArchiveStyleTh>
                                    <ArchiveStyleTh>Project</ArchiveStyleTh>
                                    <ArchiveStyleTh>Owner & Contributors</ArchiveStyleTh>
                                    <ArchiveStyleTh>Built with</ArchiveStyleTh>
                                    <ArchiveStyleTh>Link</ArchiveStyleTh>
                                </tr>
                            </ArchiveStyleThead>
                            <tbody>
                            {repos.map((repo, index) => (
                                <ArchiveStyleTr key={index}>
                                    <ArchiveStyleTd>{new Date(repo.created_at).getFullYear()}</ArchiveStyleTd>
                                    <ArchiveStyleTdName>{formatName(repo.name)}</ArchiveStyleTdName>
                                    <ArchiveStyleTd>{formatName(repo.owner.login)}</ArchiveStyleTd>
                                    <ArchiveStyleTd>
                                        <StyledListTech>
                                            {repo.topics.map((tech: any, techIndex: number) => (
                                                <StyledTechItem key={techIndex}>
                                                    <StyledTechText>{tech}</StyledTechText>
                                                </StyledTechItem>
                                            ))}
                                        </StyledListTech>
                                    </ArchiveStyleTd>
                                    <ArchiveStyleTd>
                                        <ArchiveStyleTdLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                            Go to repository <ArrowUpRight />
                                        </ArchiveStyleTdLink>
                                    </ArchiveStyleTd>
                                </ArchiveStyleTr>
                            ))}
                            </tbody>
                        </ArchiveStyleTable>
                }
            </ArchiveStyleBody>
        </ArchiveStyleContainer>
    );
}

export default Archive;