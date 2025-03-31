"use client";
import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from './ui/button';

export function BlogVote() {
    const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);

    const handleLike = () => {
        setUserVote(userVote === 'like' ? null : 'like');
    };

    const handleDislike = () => {
        setUserVote(userVote === 'dislike' ? null : 'dislike');
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="ghost"
                className={`gap-2 ${userVote === 'like' ? 'text-green-500' : ''}`}
                onClick={handleLike}
            >
                <ThumbsUp className="h-4 w-4" />
                <span>Like</span>
            </Button>
            <Button
                variant="ghost"
                className={`gap-2 ${userVote === 'dislike' ? 'text-red-500' : ''}`}
                onClick={handleDislike}
            >
                <ThumbsDown className="h-4 w-4" />
                <span>Dislike</span>
            </Button>
        </div>
    );
}
