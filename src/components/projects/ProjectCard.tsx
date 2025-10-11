'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Card className="group h-full w-full overflow-hidden transition-all p-0 border-white/10 bg-white/5 shadow-none hover:border-white/20 hover:bg-white/10 flex flex-col">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            className="h-full w-full object-cover"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:backdrop-blur-xs">
                  <button className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 group-hover:cursor-pointer hover:bg-white/30">
                    <PlayCircle />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <div className="aspect-video w-full">
                  <video
                    className="h-full w-full object-cover rounded-lg"
                    src={project.video}
                    autoPlay
                    loop
                    controls
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 py-6 flex-1 flex flex-col">
        <div className="space-y-4 flex-1 flex flex-col">
          {/* Project Header - Title and Icons */}
          <div className="flex items-start justify-between gap-4">
            <Link href={project.projectDetailsPageSlug} className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold leading-tight text-white group-hover:text-gray-300 hover:cursor-pointer transition-colors line-clamp-2">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="text-gray-400 flex size-6 items-center justify-center hover:text-white transition-colors"
                    href={project.link}
                    target="_blank"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Website</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      className="text-gray-400 flex size-6 items-center justify-center hover:text-white transition-colors"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 line-clamp-2 text-sm flex-shrink-0">{project.description}</p>

          {/* Technologies */}
          <div className="mt-auto">
            <h4 className="text-sm font-medium mb-2 text-gray-500">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2 pb-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}