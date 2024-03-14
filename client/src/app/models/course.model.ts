enum WayLearningEnum {
    Online,
    Offline
}export class Course {
   public id?: number;
   public name?: string;
   public categoryId?: number;
   public lessonsAmount?: number;
   public startLearningDate?: Date;
   public syllabus?: string[];
   public wayLearning?: WayLearningEnum;
   public lecturerId?: number;
   public imagePath?: string;
}


