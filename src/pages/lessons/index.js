import LessonView from "./LessonView";
import { LessonsProvider } from "src/context/LessonsContext";
import UpdateLesson from "./UpdateLesson";
import { useState } from "react";
import AddLesson from "./AddLesson";

export default function Lessons() {
    const [lessonData, setLessonData] = useState({});
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    const handleUpdate = (data) => {
        setLessonData(data);
        setIsUpdateOpen(true);
    };

    return (
        <LessonsProvider>
            <AddLesson />
            <UpdateLesson lessonData={lessonData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
            <LessonView onUpdateLesson={(lessonData) => handleUpdate(lessonData)} />
        </LessonsProvider>
    );
}
