import { createContext, ReactNode, useContext, useState } from "react";
import { LessonContextType } from "./types";
import { Lesson } from "src/services/types";
import LessonsService from "src/services/lessonsService";

const LessonsContext = createContext<LessonContextType | null>(null);

interface LessonsProviderProps {
    children: ReactNode;
}

export const LessonsProvider: React.FC<LessonsProviderProps> = ({ children }) => {
    const [lessons, setLessons] = useState<Lesson[] | undefined>();

    const fetchLessons = async (): Promise<void> => {
        await LessonsService.fetchLessons()
            .then(setLessons)
            .catch(error => console.error(error));
    };

    const deleteLesson = async (lessonId: string): Promise<void> => {
        await LessonsService.deleteLesson(lessonId)
            .then(() => setLessons(prev => prev?.filter(lesson => lesson.id !== lessonId)))
            .catch(error => console.error(error));
    };

    return (
        <LessonsContext.Provider value={{ lessons, fetchLessons, deleteLesson }}>
            {children}
        </LessonsContext.Provider>
    );
};

export const useLessonsContext = (): LessonContextType => {
    const context = useContext(LessonsContext);
    if (!context) {
        throw new Error('useLessons must be used within a LessonsProvider');
    }
    return context;
};
