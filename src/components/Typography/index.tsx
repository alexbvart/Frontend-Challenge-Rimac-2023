import React, { HTMLProps, ReactNode } from 'react';

type directionType = "vertical" | "horizontal";

interface TypographyProps extends HTMLProps<HTMLDivElement>{
    children?: ReactNode;
    className?: string;
    direction?: directionType;
}


interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
    children?: ReactNode;
    className?: string;
}


interface SpanProps extends HTMLProps<HTMLSpanElement> {
    children?: ReactNode;
    className?: string;
}



const TitlePage: React.FC<HeadingProps> = ({ className, children }) => 
    <h1  className={`${className} text-gray-950 text-4xl font-bold `}> {children} </h1>

const TitleContainer: React.FC<HeadingProps> = ({ className, children }) =>
    <h2  className={`${className} text-slate-900 text-2xl font-black`}> {children} </h2>

const SubtitleContainer: React.FC<HeadingProps> = ({ className, children }) => 
    <h3  className={`${className} text-slate-900 text-xl font-bold `}> {children} </h3>

export const Base: React.FC<ParagraphProps> = ({ className, children }) => 
    <p  className={`${className} text-slate-900 text text-lg font-normal `}> {children} </p>

const Small: React.FC<ParagraphProps> = ({ className, children }) => 
    <p  className={`${className} text-gray-950 text-base `}>  {children} </p>

const Xs: React.FC<SpanProps> = ({ className, children }) => 
    <span className={`${className} text-slate-950 text-sm font-normal`}> {children} </span>


const Typography = ({ className, children, direction = "vertical" }: TypographyProps) => {


    const directionStyle =  (direction === "horizontal")  ? "flex flex-row" : " flex flex-col"

    return (
        <div className={`${className} ${directionStyle} gap-2 `}> 
            {children}
        </div>
    )
}


Typography.TitlePage = TitlePage;
Typography.TitleContainer = TitleContainer;
Typography.SubtitleContainer = SubtitleContainer;
Typography.Base = Base;
Typography.Small = Small;
Typography.Xs = Xs;

export default Typography