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
};

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

export type EducationData = Base;

export type TitleData = Pick<Base, "id" | "title">;

export type EducationProps = {
  educationData: EducationData[];
  titles: TitleData[];
};
//component
export type TitlesProps = {
  titles?: TitleData[];
  details?: Base | null;
  handleSelect: (selectedItem: number | undefined) => void;
};

export type DetailsProps = {
    details?: Base;
    onClose: () => void;
  };

export type JobExperienceData = Base;
export type JobTitle = Pick<Base, "id" | "position">;
export type JobExperienceProps = {
  JobExperience?: JobExperienceData[];
  JobTitle?: JobTitle[];
  handleSelect?: (selectedItem: number | undefined) => void;
};
