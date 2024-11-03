// Base Type (common properties across types)
export type Base = {
  id?: number | undefined;
  title?: string;
  school?: string;
  type?: string;
  career?: string;
  city?: string;
  image?: string;
  date?: string;
  position?: string;
  company?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  responsibilities?: string[];
  projectTitle?: string;
  description?: string;
  techStack?: string[] ;
  images?: string[];
  link?: string;
};

// About Me Types
export type AboutMeData = {
  id?: string;
  image?: string;
  name?: string;
  paragraph1?: string;
  paragraph2?: string;
};

export type AboutMeProps = {
  aboutMeData: AboutMeData[];
};

// Education Types
export type EducationData = Base;

export type EducationProps = {
  educationData: EducationData[];
  titles: TitleData[];
};

// Title Types (Used in both Education and Job Experience)
export type TitleData = Pick<Base, "id" | "title">;

export type TitlesProps = {
  titles?: TitleData[];
  details?: Base | Base[]| null;
  image?: Base | Base[]| null;
  handleSelect: (selectedItem: number | undefined) => void;
};

// Project Types
export type ProjectTitles = Pick<Base, "id" | "projectTitle" | "image">;

export type ProjectsProps = {
  titles?: ProjectTitles[];
  details?: Base [] | null;
};

// Job Experience Types
export type JobExperienceData = Base;

export type JobTitle = Pick<Base, "id" | "position">;

export type JobExperienceProps = {
  JobExperience?: JobExperienceData[];
  JobTitle?: JobTitle[];
  handleSelect?: (selectedItem: number | undefined) => void;
};

// Details Component Types
export type DetailsProps = {
  details?: Base | null;
  onClose: () => void;
  open?: boolean;
};